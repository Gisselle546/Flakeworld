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

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.comments.search(ctx.query);
    } else {
      entities = await strapi.services.comments.find(ctx.query['profile','profile.user','post','children','comments.children','comments.children.profile','comments.children.profile.user']);
    }

    const comments = entities.map(entity =>  sanitizeEntity(entity, {
        model: strapi.models.comments,
      }));

      
      
     


      return nestChilds(comments)
     
  
  
  },

  
     
      
      async findOne(ctx) {
        const { id } = ctx.params;




        const entity = await strapi.services.comments.findOne({ id },['profile','profile.user','post','post.comments','post.profile','post.profile.user','post.comments.post','post.comments.profile','post.comments.profile.user','post.comments.post.profile','post.comments.post.profile.user'])
      


   
        const comment = sanitizeEntity(entity, { model: strapi.models.comments});


          if(comment){
        
            
            comment.post.comments=createTree(comment.post.comments);
            }
      
            return comment;
      
          }
    

    
      


};
