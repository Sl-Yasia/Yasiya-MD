FROM quay.io/yasiya/yasiya-md:latest

RUN git clone https://github.com/Sl-Yasia/Yasiya-MD /root/Yasiya-MD
WORKDIR /root/Yasiya-MD/
ENV TZ=Asia/Colombo
RUN yarn add supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
