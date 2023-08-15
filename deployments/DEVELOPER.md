# Digital Talent Deployments

# Overview

The `Digital Talent` project currently consists of 3 applications: the main website (www) the hiring management system api (hms-api) and the hiring management front end (?)

The deployment of the projects is controlled through kustomize, to deploy to our namespace in OpenShift. The deployments configurations can be found under openshift/kustomize.

These deployments may also depend on secrets; Openshift Templates generally handles secrets and configmaps better, so these can be found under the openshift/templates folder.

Currently there is one secret that must be set up for the hms-api project. To run, log into openshift and run the command:

```
oc process -f templates/secrets/secrets.yml
-p PROJECT_NAMESPACE=
-p ENV_NAME=
-p NODE_ENV=
-p EVENT_STORE_URL=
-p KEYCLOAK_REALM_URL=
| oc create -f -
```

To deploy the project (or patch the exiting infrastructure), simply run

```
oc apply -k openshift/kustomize/overlays/hms-api/$ENV
```

where $ENV is either dev test or prod. (please only deploy to prod if your sure of what you're doing!)
