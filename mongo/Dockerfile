FROM mongo

RUN apt-get update \ 
    && apt-get install -y git build-essential \ 
    && git clone git@github.com:TylerBrock/mongo-hacker.git \ 
    && cd mongo-hacker \ 
    && make install \
    && cd .. \ 
    && rm -rdf mongo-hacker/

CMD ["mongod"]