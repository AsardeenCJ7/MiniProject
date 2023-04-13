const app = Vue.createApp({
    data() {
      return {
        newComment: {
          name: '',
          comment: ''
        },
        comments: []
      }
    },
    methods: {
      addComment() {
        this.comments.push(this.newComment);
        this.newComment = {
            name: '',
      comment: ''
    }
  },
  deleteComment(index) {
    this.comments.splice(index, 1);
  }
}
});

app.mount('#app');