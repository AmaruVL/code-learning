<!-- # Using docker to install
docker pull jenkins/jenkins:lts-jdk17 -->

// Create image with add-on blueocean
docker build -t myjenkins-blueocean:2.414.2 .

<!-- Crear network -->
docker network create jenkins

<!-- Crear contenedor -->
docker run --name jenkins-blueocean --restart=on-failure --detach \
  --network jenkins --env DOCKER_HOST=tcp://docker:2376 \
  --env DOCKER_CERT_PATH=/certs/client --env DOCKER_TLS_VERIFY=1 \
  --publish 8080:8080 --publish 50000:50000 \
  --volume jenkins-data:/var/jenkins_home \
  --volume jenkins-docker-certs:/certs/client:ro \
  myjenkins-blueocean:2.414.2

<!-- Password -->
docker exec 146 cat /var/jenkins_home/secrets/initialAdminPassword
