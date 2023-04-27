FROM quay.io/yasiya/yasiya-md:latest

RUN git clone https://github.com/Sl-Yasia/Yasiya-MD /root/Yasiya-MD
WORKDIR /root/Yasiya-MD/
ENV TZ=Asia/Colombo
RUN npm install npm@latest
RUN yarn install --network-concurrency 1

CMD ["node", "bot.js"]
