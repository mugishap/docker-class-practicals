FROM node:alpine
RUN apkadd --update redis
CMD ["redis-server"]