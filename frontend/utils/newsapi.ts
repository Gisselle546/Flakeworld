
import axios from 'axios';

const getStory = async (id:any) => {
    try {
      const story = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
      return story.data;
    } catch (error) {
      console.log('Error while getting a story.');
    }
  };






export async function getTopnnews(){
    const storyid = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    const data=storyid.data;
   
  



  let completedata= await Promise.all(data.slice(0, 8).map(getStory));

  return completedata;
    


 

} 



export async function getNewsstory(){
  const storyid = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_KEY}`)
  const data=storyid.data.articles.slice(0, 8)
 
   return data;



}



    
 
      
        
        
