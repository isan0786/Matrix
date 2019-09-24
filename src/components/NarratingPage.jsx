import React, { Component } from 'react';
import Navigationbar from './Navigationbar';
import Footer from './Footer';
import AudioRecorder from 'react-audio-recorder';
export default class NarratingPage extends Component {

    render() {
        return (
           
            <div> 
                   
                    <Navigationbar/>
                    <div class="form-group yellow-border" style={{marginRight:20, marginLeft:20}}>
                    <h4 for="centered" style={{textAlign:"center"}}>Girl And The Gingerbread</h4>
                    <textarea readOnly z-depth-1 class="form-control" id="centered" rows="10" style={{ borderColor: 'orange', borderWidth: 2 ,marginBottom: 40}}>
                    Once upon a time there was an old woman who loved baking gingerbread. She would bake gingerbread cookies, cakes, houses and gingerbread people, all decorated with chocolate and peppermint, caramel candies and colored frosting.
                    She lived with her husband on a farm at the edge of town. The sweet spicy smell of gingerbread brought children skipping and running to see what would be offered that day.
                    Unfortunately the children gobbled up the treats so fast that the old woman had a hard time keeping her supply of flour and spices to continue making the batches of gingerbread. Sometimes she suspected little hands of having reached through her kitchen window because gingerbread pieces and cookies would disappear. One time a whole gingerbread house vanished mysteriously. She told her husband, "Those naughty children are at it again. They don't understand all they have to do is knock on the door and I'll give them my gingerbread treats."
                    One day she made a special batch of gingerbread men because they were extra big. Unfortunately for the last gingerbread man she ran out of batter and he was half the size of the others.
                    She decorated the gingerbread men with care, each having socks, shirt and pants of different colors. When it came to the little gingerbread man she felt sorry for him and gave him more color than the others. "It doesn't matter he's small," she thought, "He'll still be tasty."
                    Putting the rack on the kitchen windowsill she left it there to cool and went to finish her laundry. The gingerbread men lay quietly, their frosted eyes gazing at the sky with its puffy clouds.
                    At that moment a voice came from nowhere. "Get up. Get up. Come with me."Everyone looked to see who was speaking.
                    It was a butterfly flying just outside the window. Butterflies are naturally beautiful, but her wings were an exceptionally pretty marbled blue.
                    She come with me," she urged again.The gingerbread men didn't react except to keep staring. All but the smallest gingerbread man who jumped up from the tray and leaped off the kitchen windowsill onto the grass below faster than you could say "hurry."
                    </textarea>
                    <div align='center'>
                    <AudioRecorder/>
                    </div>
                    </div>
                    
                    <Footer/>
                    
                    
            </div>
            
        )
    }
}