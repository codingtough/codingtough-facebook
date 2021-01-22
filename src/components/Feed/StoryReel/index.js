import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
   return (
      <div className="storyReel">
         <Story
            image="https://images.unsplash.com/photo-1503631285924-e1544dce8b28?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
            profileSrc="https://i.pravatar.cc/150?img=3"
            title="Benny Bangha"
         />
         <Story
            image="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTR8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
            profileSrc="https://i.pravatar.cc/150?img=57"
            title="Frank Lopez"
         />
         <Story
            image="https://images.unsplash.com/photo-1536270269612-32c561fa1221?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTA2fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            profileSrc="https://i.pravatar.cc/150?img=56"
            title="Klein Hooks"
         />
         <Story
            image="https://images.unsplash.com/photo-1472847720459-21ede812f22a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTc1fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            profileSrc="https://i.pravatar.cc/150?img=7"
            title="Bloom Stick"
         />
         <Story
            image="https://images.unsplash.com/photo-1514517521153-1be72277b32f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
            profileSrc="https://i.pravatar.cc/150?img=9"
            title="Elly Kirk"
         />
      </div>
   )
}

export default StoryReel;
