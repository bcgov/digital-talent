# Use the official Node.js 18 image.
FROM node:18.17.0 as build
# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./
#COPY ../../tsconfig.json ../../tsconfig.json
# Install dependencies.
RUN npm install

COPY . .

RUN npm run build
# openshift runs as a different user than what docker builds with

# this fixes the issue as related to the npm cache
RUN mkdir /.npm
RUN chgrp -R 0 /.npm && chmod -R g=u /.npm
#RUN chgrp -R 0 /usr/src/app/node_modules/ && chmod -R g=u /usr/src/app/node_modules
# Copy local code to the container image.

# Serve the app with Nginx
FROM nginx:alpine
# COPY --from=build /usr/src/app/dist /etc/nginx/html/app
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN set -x \
    && sed -i -e 's/^\(nginx:[^:]\):[0-9]*:[0-9]*:/\1:1001:0:/' /etc/passwd \
    && mkdir -p /var/cache/nginx \
    && chgrp -R 0 /var/cache/nginx && chmod -R g=u /var/cache/nginx \
    && chgrp -R 0 /var/run/ && chmod -R g=u /var/run \
    && rm /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh /docker-entrypoint.d/30-tune-worker-processes.sh


EXPOSE 5173
CMD ["nginx", "-g", "daemon off;"]
