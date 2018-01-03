<template>
  <div>
    <h1>Create An Article</h1>
    <form v-on:submit.prevent="addArticle">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Article Name:</label>
            <input type="text" class="form-control" v-model="article.name">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Article Description:</label>
            <input type="text" class="form-control col-md-6" v-model="article.description">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Article Date:</label>
            <input type="text" class="form-control col-md-6" v-model="article.date">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Article reward:</label>
            <input type="text" class="form-control col-md-6" v-model="article.reward">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Article reward cant:</label>
            <input type="text" class="form-control col-md-6" v-model="article.rewardCount">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Article Price:</label>
            <input type="text" class="form-control col-md-6" v-model="article.price">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Article Active:</label>
            <input type="text" class="form-control col-md-6" v-model="article.active">
          </div>
        </div>
      </div>

      <br />
      <div class="form-group">
        <button class="btn btn-primary">Add Article</button>
      </div>
    </form>
  </div>
</template>

<script>
  import toastr from 'toastr';
  export default {
    data(){
      return{
        article:{}
      }
    },
    methods: {
      addArticle(){
        let uri = 'http://localhost:4000/articles/add';
        this.axios.post(uri, this.article).then((response) => {
          console.log(response);
          toastr.success(response.data.article, 'Response');
        });
      }
    }
  }
  </script>