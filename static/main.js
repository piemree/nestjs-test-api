const app = new Vue({
  el: '#app',
  data: {
    title: 'Nestjs Websockets Chat',
    name: '',
    text: '',
    messages: [],
    socket: null,
  },
  methods: {
    sendMessage() {
      if (this.validateInput()) {
        const message = {
          name: this.name,
          text: this.text,
        };
        this.socket.emit('msgToServer', message);
        this.text = '';
      }
    },
    receivedMessage(message) {
      this.messages.push(message);
    },
    validateInput() {
      return this.name.length > 0 && this.text.length > 0;
    },
  },
  created() {
    let host = process.env.HOST || 'localhost';
    let port = process.env.PORT || 3000;
    let protocol = process.env.PROTOCOL || "http"
    this.socket = io(`${protocol}://${host}:${port}`);
    this.socket.on('msgToClient', (message) => {
      this.receivedMessage(message);
      console.log(this.messages);
    });
  },
});
