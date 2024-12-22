import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <section style="padding:40px;">
      
  
      <h4 style="color: black;font-weight:200; padding-bottom:40px;"> <i>{greeting} </i> </h4>
      
      <button onClick={() => setGreeting(randomMessage())}>
        New Quote
      </button>


      
    </section>
  );
}

