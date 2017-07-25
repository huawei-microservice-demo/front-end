[![Build Status](https://travis-ci.org/microservices-demo/front-end.svg?branch=master)](https://travis-ci.org/microservices-demo/front-end)
[![](https://images.microbadger.com/badges/image/weaveworksdemos/front-end.svg)](http://microbadger.com/images/weaveworksdemos/front-end "Get your own image badge on microbadger.com")


Front-end app
---
Front-end application written in [Node.js](https://nodejs.org/en/) that puts together all of the microservices under [microservices-demo](https://github.com/microservices-demo/microservices-demo).

# Build

## Dependencies

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://docker.com">Docker</a></td>
      <td>>= 1.12</td>
    </tr>
    <tr>
      <td><a href="https://docs.docker.com/compose/">Docker Compose</a></td>
      <td>>= 1.8.0</td>
    </tr>
    <tr>
      <td><a href="gnu.org/s/make">Make</a>&nbsp;(optional)</td>
      <td>>= 4.1</td>
    </tr>
  </tbody>
</table>

example: docker-image-name:version-tag --> sockshop-frontend-service:0.7.0-SNAPSHOT

## Step1: 
git clone git@github.com:huawei-microservice-demo/front-end.git
cd front-end

## Step2: Build the docker image
docker build --no-cache=true -t [docker-image-name:version-tag] .

## Step3: Tag the image with service stage
docker tag [docker-image-name:version-tag]  registry.cn-north-1.hwclouds.com/hwcse/[docker-image-name:version-tag]

## Step4: Docker login
docker login -u [username] -p [private-key] [registry-name]

## Step5: Docker push
docker push registry.cn-north-1.hwclouds.com/hwcse/[docker-image-name:version-tag]

## Step6: 
Login to the service and get the ip address / domain to open microservice in browser