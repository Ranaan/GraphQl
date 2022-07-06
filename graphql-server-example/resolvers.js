
const posts = [
    {
      id: 1,
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      id: 2,
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];
  
const resolvers = {
    Query: {
      posts: () => posts,
    },
  
Mutation:{
    createPost:(_, {title, author}) =>{
        const newPost = {id:3, title, author};
        posts.push(newPost);
        return newPost;
    },

    deletePost: (_, {id}) =>{
        const newPost = posts.filter(post => post.id !==id);
        return newPost;
        },
    },

    updatePost: (_, {id, title, author}) =>{
      const editPost = posts.map(Post => {
        if (Post.id ==id){
          Post.title = title;
          Post.author = author;
        }
        return Post;
      });

      return editPost;
      },
  
    
};

module.exports = resolvers;