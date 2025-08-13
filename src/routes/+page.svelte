<svelte:head>
    <title>Cadent</title>
</svelte:head>

<script lang='ts'>

    console.log("page loads")
    const videoFile = "/cadent-website-vid.mp4"
    let whatSection = $state<Element>();
        
    function scrollToExplain() {
        const whatBounds = whatSection?.getBoundingClientRect()
        
        console.log("Scrolling to", whatBounds?.y)
        scrollTo(0, whatBounds?.y)

    }

</script>

<div class="aboveFold">

    <div class="headline-card">
        <h1 class="title">Just do the <br/> <strong class="scTextColor">f*cking work</strong></h1>
    
        <ul class="main-list">
            <li>No learning curve.</li>
            <li>No thinking of titles or descriptions.</li>
            <li>No figuring out how the app works.</li>
            <li>Just tell it what you want.</li>
            <li><strong>Do the work.</strong></li>
        </ul>
        
        <div class="downloadArea">
            <!-- <button class = 'downloadBtn'>
                <span class="material-symbols--download"></span>
                Get the app
                </button> -->
                
                <form id="waitlistForm" method='POST' action="?/waitlist">
                    <input id="emailInput" name='email' type="email" placeholder="youremail@example.com">
                    <button id="joinWaitlistBtn" formaction="?/waitlist">Join Waitlist</button>
                </form>
                
            <button onclick={scrollToExplain} id="explain">
                I still don't understand this app
            </button>
        </div>
        
    </div>
    
    <div>
        <video width=1200 autoplay muted loop disablepictureinpicture playsinline>
            <track kind='captions'/>
            <source src={videoFile}/>
        </video>
    </div>

</div>


<h2 bind:this={whatSection} id="what">What is <span class="scTextColor">Cadent</span> and how would it help me work?</h2>
<p>
    I am tired of productivity apps being so convoluted and doing so many things at once. 
    I feel like I spend more time trying to do productivity “right”, that I actually become less productive. 
</p>
<p>
    I don't want to make a new task title, description, due date, assign it to someone, constantly update the status, etc. 
    Do I make a new task or update this one? What category do I assign it?
</p>
<p>
    It's so much work that isn't the ACTUAL work, so I just don't do it. But then, I get disorganized.
</p>
<p>
    So <span class="scTextColor">Cadent</span> solves all of that. 
</p>
<p>
    How it works: 
</p>
<ol>
    <li>You press the microphone</li>
    <li>You say, “I just finished my PowerPoint slides for my boss. I think I'm gonna finish the minutes from the last meeting and send it out.”</li>
    <li><span class="scTextColor">Cadent</span> completes old tasks, makes new tasks, prioritizes them as needed, and presents them to you to complete.</li>
</ol>
<p>
    It's just you thinking out loud, and then your tasks get organized for you.
</p>

<br>
<h2 id="what">I'm not gonna remember to do this.</h2>
<p>
    And you don't have to. 
</p>
<p>
    Activate a work session, and <span class="scTextColor">Cadent</span> will ask you for regular updates. 
    Just quick 5-second updates throughout your day and you stay on track.
</p>
<p>
    Even better, it will learn how you work. 
    As you tell it which tasks you complete, it can see how well you work on different types of tasks, 
    at what times of day, and how you prioritize things.
</p>
<p>
    It will not only keep you on track, but it will also <strong>schedule your work better</strong> too.
</p>

<br>
<h2 id="what">I'm still confused.</h2>
<p>
    Do you see how “productivity apps” have messed you up? 
    You're expecting a bunch of features, but all you need to do is tell the app what you did
    and what you need to do for it to organize your tasks for you.
</p>
<p>
    Just download the app and try it. 
    You get full access for 7 days, completely free. 
    If it doesn’t work for you, just cancel your trial.
</p>
<p>
    Before you leave though, please send me a message to let me know why it didn’t work for you. 
    I want to make the app the best it can be.
</p>

<footer>
</footer>

<style>

:root {
    margin-left: 2rem;
    margin-right: 2rem;
}

:root, input, button {
    font-family: "Outfit", sans-serif;
    color: #FFFFFF;
    font-size: 20px;
}


button {
    border: none;
    background: none;
    cursor: pointer;
}

input {
    background-color: #434343;
    padding: 1rem;
    outline: none;
    border: 1px solid #434343;
    border-radius: 1rem;

    &:focus {
        border: 1px solid #F87171;
    }
}



h1 {
    font-size: 6rem;
    font-weight: normal;
    margin-bottom: 0;
}

h2 {
    font-size: 1.7rem;
}

video {
    max-width: 30rem;
}

.scTextColor {
    color: #FBB6B6
}    

.main-list {
    font-size: 2rem;
    font-weight: lighter;
}    

.downloadArea {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-start;
    gap: 14px
}


.downloadBtn {
    background-color: #F87171;
    color: white;
    place-items: center;
    padding: 14px;
    padding-right: 20px;
    padding-left: 20px;
    font-weight: bold;
    font-size: 1.5rem;
    font-family: "Outfit", sans-serif;
    border-radius: 20px;
    border: none;
    width: 100%;
}

#joinWaitlistBtn {
    padding: 1rem;
    border-radius: 1rem;
    background-color: #F87171;
    font-weight: bold;

    &:disabled {
        background-color: lightslategrey;
        color: darkgrey
    }
}

#explain {
    font-size: 1rem;
    color: white;
    text-align: center;
    text-decoration: underline;
}

.material-symbols--download::after {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  color: white;
  vertical-align: bottom;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23ffffff' d='m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z'/%3E%3C/svg%3E");
}

.aboveFold {
    display: flex;
    flex-direction: row;
    margin-bottom: 5rem;
    align-items: center;
    justify-content: space-between;
}


#waitlistForm {
    display: flex;
    width: auto;
    max-width: 100%;
    align-items: center;
    gap: 14px;
}


@media (width <= 1450px) {
    :root, input, button {
        font-size: 18px;
    }
}

@media (width <= 1270px) {
    .main-list {
        font-size: 1.5rem;
        font-weight: lighter;
    }
    
    h1 {
        font-size: 4rem;
    }
}

@media (width <= 1130px) {
    :root, input, button {
        font-size: 16px;
    }
}

@media (width <= 990px) {
    .aboveFold {
        flex-direction: column;
        gap: 3rem;
    }

    h1 {
        text-align: center;
    }
}

@media (width <= 570px) {
    :root, input, button {
        font-size: 14px;
    }

    h1 {
        font-size: 4rem;
    }
}

@media (width <= 440px) {
    :root, input, button {
        font-size: 12px;
    }
}

</style>