FROM node:10-stretch

ENV NPM_CONFIG_LOGLEVEL="info"

ADD https://art.lmru.tech/generic-devops/debian/apt-transport-https_1.4.9_amd64.deb /apt-transport-https.deb
RUN apt install /apt-transport-https.deb && \
    rm -f /apt-transport-https.deb

RUN sed -i 's/http:\/\/deb.debian.org\/debian/https:\/\/art.lmru.tech\/deb-remote-generic/g' /etc/apt/sources.list && \
    sed -i 's/http:\/\/security.debian.org\/debian-security/https:\/\/art.lmru.tech\/deb-remote-security/g' /etc/apt/sources.list

RUN apt-get update &&\
    apt-get install -y \
    openssh-client \
    git &&  \
    rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app


COPY . .

RUN git config --global user.email "adeo-marketplace@lmru.com" && \
    git config --global user.name "Byndyusoft"

RUN mkdir -p  ~/.ssh/ && \
    ssh-keyscan github.com >> ~/.ssh/known_hosts
