'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

 const { sanitizeEntity } = require('strapi-utils');


 function createTree(list) {
  var map = {},
    node,
    roots = [],
    i;

  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i; // initialize the map
    list[i].children = []; // initialize the children
  }

  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parent) {
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node.parent]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

function nestChilds (object) {
  const list = [];

  object.forEach(i => {
    // If is related to parent
    if (i.parent) {
      // Scope that parent
      const parent = object.find(({ id }) => id === i.parent.id);
      
      // Add a child array property to that parent if not already done
      if (!parent.hasOwnProperty('children')) parent.children = [];

      // Add current item to it's corresponding parent
      parent.children.push(i);

      // Remove parent property
      delete i.parent;
    } else {
      list.push(i);
    }
  })
  return list;
}



 module.exports = {
   /**
    * Retrieve records.
    *
    * @return {Array}
    */
 
   async find(ctx) {
     let entities;
     if (ctx.query._q) {
       entities = await strapi.services.posts.search(ctx.query);
     } else {
       entities = await strapi.services.posts.find(ctx.query, ['profile','profile.user','profile.follow','comments','comments.children','likes','retweets']);
     }
 
   const posts =  entities.map(entity => sanitizeEntity(entity,
       { model: strapi.models.posts 
      }));

      
    if(posts){
      posts.map(post=>{
        post.comments=createTree(post.comments)
      })
    }
      
      
      return posts;
    
    
      },

   
   async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.posts.findOne({ id },['profile','profile.user','comments','comments.profile','comments.profile.user','comments.post','children','likes','retweets']);
    
    const post = sanitizeEntity(entity, { model: strapi.models.posts });
  
      if(post){
        post.comments = createTree(post.comments)
      }
  
      return post;
  
  },






 
  
 
 
 
 
 
 
  };
