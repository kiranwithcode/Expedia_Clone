function navbar(){
    return `
    <nav>
    <ul>
        <div id="left">
            <li><a href="index.html">
                <img src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2" alt="" id="">
                </a></li>
                &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
            <select name="travel" id="travel1">
                <option value="" selected disabled>More Travel</option>
                <option value="">Stays</option>
                <option value="">Flights</option>
                <option value="">Cars</option>
                <option value="">Packages</option>
                <option value="">Holiday activities</option>
                <option value="">Deals</option>
                <option value="">Group & Meetings</option>
                <option value="">Mobile</option>
            </select>
        </div>
        <div class="items">
            <li><a href="">English</a></li>
            <li><a href="">Support</a></li>
            <li><a href="/Trips/trips.html">Trips</a></li>
            <li><a href="./signin/signin.html">Sign in</a></li>
        </div>
    </ul>
</nav>
    `;
}

export default navbar;