import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Feed from './components/pages/Feed';
import Profile from './components/pages/Profile';
import { useState } from 'react';


function App() {

    const posts = [
      {
          img: 'https://i.mmo.cm/is/image/mmoimg/mw-product-max/john-doe-foam-latex-mask--mw-117345-2.jpg',
          time: '1 hour ago',
          likes: 10,
          creator: '@johndoe',
          caption: 'My first post.'
      },
      {
          img: 'https://media.gq.com/photos/64503be635a3b5621093e9f1/16:9/pass/GettyImages-1486912685.jpg',
          time: '1 hour ago',
          likes: 100000,
          creator: '@rogerfederer',
          caption: 'At the MET Gala with my wife.'
      },
      {
          img: 'https://media.discordapp.net/attachments/1063874117507494048/1070370884931563602/Rocco_Beauceron_dog_happy_on_a_backyard_loan_Photoshoot_Brenize_360a1224-602a-4939-b3bc-fccde3db6583.png?width=1082&height=1082',
          time: '8 hours ago',
          likes: 200,
          creator: '@rocco_beauceron',
          caption: 'My profile pic'
      },
      {
          img: 'https://media.discordapp.net/attachments/1063874117507494048/1087901396646510652/Viper_sweet_cat_in_a_Winter_wonderland_2_69087a0f-dfae-48fd-a899-135fa8a398be.png?width=1024&height=1024',
          time: '1 day ago',
          likes: 100,
          creator: '@johndoe',
          caption: 'My cat snowball #catsofinstagram'
      },
      {
          img: 'https://media.discordapp.net/attachments/1063874117507494048/1072561078996848670/abuela_de_dos_floppy_eared_Beauceron_dog_happy_tongue_out_using_e4270418-f93d-403b-9487-07c1dfb275dd.png?width=1024&height=1024',
          time: '1 day ago',
          likes: 100,
          creator: '@rocco_beauceron',
          caption: 'In the space #dogsofinstagram #beauceronsofinstagram'
      },
      {
          img: 'https://media.discordapp.net/attachments/1063874117507494048/1070408303873626172/abuela_de_dos_blue-eyed_dog_from_0_2a20f6a0-4a34-4294-8988-e6a9fe295634.png?width=1024&height=1024',
          time: '3 days ago',
          likes: 100,
          creator: '@zico_borsky',
          caption: '4 months old #borskydog #borsky'
      },
      {
          img: 'https://media.discordapp.net/attachments/1063874117507494048/1087900382329581689/Joseph_Is_Great_cat_lake_happiness_Yoshitaka_Amano_Banner_Saga__7b251cf6-1f0c-49d1-843b-11a10f3e995f.png?width=720&height=1082',
          time: '3 days ago',
          likes: 100,
          creator: '@johndoe',
          caption: 'Cat drawings'
      },
      {
          img: 'https://media.discordapp.net/attachments/1063874117507494048/1070408304255324170/abuela_de_dos_blue-eyed_dog_from_1_2a20f6a0-4a34-4294-8988-e6a9fe295634.png?width=1024&height=1024',
          time: '3 days ago',
          likes: 100,
          creator: '@zico_borsky',
          caption: 'AI paints me as a zombie'
      },
  ];

  let repetitions = Math.floor(Math.random() * 5) + 3;
  let randomPosts = [];

  for (let i = 0; i < repetitions; i++) {
      randomPosts.push(posts[i]);
  }

  const [postList, setPostList] = useState(randomPosts);
  const [section, setSection] = useState('feed');

  const handleNavClick = (section) => {
        setSection(section);
  };

  return (
    <div className="App">
      <Header onNavClick={handleNavClick}/>
      <main className="container-fluid">
        { section === 'feed' ? (
            <Feed posts= { postList }/>
        ) : (
            <Profile 
        avatar={'https://cdn1.picuki.com/hosted-by-instagram/q/0exhNuNYnjBcaS3SYdxKjf8AzPRyWgxSZ60STLepjSVmIR1vLHOapZA0mpCj4yRwKwVlASuRYzxh5oMoUlhTCD17PkPaS7yKSTdQ7qyaXOqhvDdl8pNilb4yKnwZYXet8MIpVmepNWwSDv5PHL||lo79UvOa0LGFq8zCXW||dDmG4CqZL0APIz9Z8j3aqT3Vjm5IolITNev20zJRpl85PZrjQDUufkM8lmpKw5RbgBzPgL6NDtmjHlQD1||PVFwFA+QsoicufkPsS7rXzQPz0SGf||AwFhswtRO+sxtsk7wRvtTyEa9M+N8Z96PUTjtQEjktqBwzwMSCtiXvaUuvxVFo2kLc8Jufa7MQ8ILnHdarQ9n6||w||WeovHJa5pT3FYM6qHXQ3RJ7O5ApUPwt5sT6gZgRiK||gWCZ7nwgUd3V2Ifhg==.jpeg'}
        username={'@anyataylorjoy'}
        bio={'Anya Taylor-Joy | Dragicorn Space Oddity 🛸🍒🎆 | https://www.harpersbazaar.com/uk/fashion/fashion-news/a41896179/anya-taylor-joy-actress-cover-interview/'}
    />
        )}
      </main>
    </div>
  );
}

export default App;
