import {createRoot} from 'react-dom/client';
import Contact from './contact.jsx';

const root = createRoot(document.getElementById('root'))

root.render(
    <div>
    <Contact
    img = "../src1/mr-whiskerson.png"
    name = "Mr Whiskerson"
    phone = "08184584528"
    email = "muran@gmail.com"
    />

    <Contact 
    img = "../src1/felix.png"
    name = "Mr felix"
    phone = "081855555555"
    email = "Felix@gmail.com"
    />

    <Contact 
     img = "../src1/fluffykins.png"  
    name = "Mr fluffykins"
    phone = "081855555555"
    email = "Fluffy@gmail.com"
    />

    <Contact 
     img = "../src1/pumpkin.png" 
    name = "Mr Pumpkins"
    phone = "08180000005"
    email = "Pumpkins@gmail.com"
    />

    </div>
)