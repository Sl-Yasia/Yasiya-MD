FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/Sl-Yasia/Yasiya-MD /root/Yasiya-MD
WORKDIR /root/Yasiya-MD/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1

CMD ["node", "bot.js"]
