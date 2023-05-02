# Digital Talent Website OpenShift Templates

## Installation

1. Run the following commands to push the `ImageStream`, `DeploymentConfig`, `NetworkPolicy` and `Service` to OpenShift

   ```sh
   oc process -f ./www-is.yml \
   -p NAMESPACE=<NAMESPACE> \
   -p DOCKER_IMAGE_URL=<DOCKER_IMAGE_URL> \
   -p DOCKER_IMAGE_TAG=<BRANCH>-latest \
   | oc apply -f -

   oc process -f ./www-dc.yml \
   -p NAMESPACE=<NAMESPACE> \
   -p DOCKER_IMAGE_TAG=<BRANCH>-latest \
   | oc apply -f -

   oc process -f ./www-np-s.yml \
   -p NAMESPACE=<NAMESPACE> \
   | oc apply -f -
   ```

2. Use the following manifest to create a route and make the site available using https.

   ```yaml
   apiVersion: route.openshift.io/v1
   kind: Route
   metadata:
     name: <URL>
   spec:
     host: <URL>
     path: /
     to:
       kind: Service
       name: www
     tls:
       termination: edge
       key: |-
         -----BEGIN RSA PRIVATE KEY-----
         ...
         -----END RSA PRIVATE KEY-----
       certificate: |-
         -----BEGIN CERTIFICATE-----
         ...
         -----END CERTIFICATE-----
       caCertificate: |-
         -----BEGIN CERTIFICATE-----
         ...
         -----END CERTIFICATE-----
   ```
