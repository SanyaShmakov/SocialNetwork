import React from 'react'
import "./StoryReel.css";
import Story from "./Story"

function StoryReel() {
    return (
        <div className="storyReel">
             <Story 
                image="https://www.ifema.es/mbfw-madrid/img/l/mans/mans--1920-x1280.jpg"
                profileSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                title="Sonny Sangha"
            />
            <Story 
                image="https://st2.depositphotos.com/1001959/6975/i/950/depositphotos_69751601-stock-photo-muscular-mans-body.jpg"
                profileSrc="https://ss.thgim.com/third-party/opta/article31706537.ece/alternates/FREE_380/charlesleclerc-corppedyr4jdv9n5erk15rtxqoa9lwlwjpg"
                title="Vlad"
            />
            <Story 
                image="https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2019/02/05/USATODAY/usatsports/gettyimages-935715664.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp"
                profileSrc="https://image.cnbcfm.com/api/v1/image/106425335-1583364789630gettyimages-1127726480.jpeg?v=1583442867&w=1400&h=950"
                title="Krista"
            />
            <Story 
                image="https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/kate-beckinsale-top-20-sexiest-hottest-women-2020-202003-1585584110-300x401.jpg"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ybWYwp5tIyZXc_Q4_91HRjj1iPO-e7L-BA&usqp=CAU"
                title="Anuta"
            />
            <Story 
                image="https://i.pinimg.com/originals/ee/60/8c/ee608ce8387281569dd10555f96d20ed.jpg"
                profileSrc="https://i.pinimg.com/236x/97/9a/45/979a4545d398f3074bbb8a081146d974.jpg"
                title="Vika"
            />
        </div>
    )
}

export default StoryReel
