class SpecialHeader extends HTMLElement{
	connectedCallback(){
		this.innerHTML=`

	<header class="site-h">
				<div class="logo-c">
				<img class="logo" src="images/logo.png">
				</div>
				<div class="site-n">
				<h1>Govt. Industrial Training Institute Pandariya</h1>
				<h4>District Kabirdham C.G. 491559</h4>
				</div>
				<div class="logo-c"> 
				<img class="logo" src="images/logo1.png">
				</div>
	</header>
	

    	<table class="t1">
    	<tr>
    		    <td><a href="index.html">Home</a></td>
                <td><a href="about.html">About Us</a></td>
                <td><a href="notice.html">Notic Board</a></td>
                <td><a href="admissions.html">Admissions</a></td>
                <td><a href="courses.html">Courses</a></td>
                <td><a href="study.html">Study Materials</a></td>
                <td><a href="instructors.html">Instructors</a></td>
                <td><a href="students.html">Students</a></td>
			    <td><a href="gallery.html">Gallery</a></td>
                <td><a href="contact.html">Contact Us</a></td>
    	</tr>
    	</table>
		`
	}
}

class SpecialFooter extends HTMLElement{
	connectedCallback(){
		this.innerHTML=`
<!---------- Footer HTML Starts --------->
<div class="footer">
   <div class="container">
      <div class="footer-sect">
         <h2>Best Institute For Education</h2>
         <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.</p>
         <img src="images/icon-fb.png"> 
         <img src="images/icon-tw.png"> 
         <img src="images/icon-in.png"> 
         <img src="images/icon-li.png"> 
      </div>
      <div class="footer-sect">
         <h2>Quick Links</h2>
         <ul class="footer-menu">
            <li><a href="#"> > Home</a></li>
            <li><a href="#"> > About us</a></li>
            <li><a href="#"> > Tutorial</a></li>
            <li><a href="#"> > Event</a></li>
            <li><a href="#"> > Gallery</a></li>
            <li><a href="#"> > Press Release</a></li>
            <li><a href="#"> > Courses</a></li>
            <li><a href="#"> > Contact Us</a></li>
         </ul>
      </div>
      <div class="footer-sect">
         <h2>Contact Info</h2>
         <ul class="footer-contact">
            <li><b>Email :</b> reply@bestinstituteeducation.com </li>
            <li><b>Call :</b> +91 -123 456 7890 </li>
            <li><b>Fax :</b> +91 -123 4567890 </li>
            <li><b>Website :</b> https://www.dezven.com </li>
         </ul>
      </div>
   </div>
</div>
</body>
</html>
<!---------- Footer HTML Ends --------->
	
		`
	}
}

customElements.define('special-header',SpecialHeader)
customElements.define('special-footer',SpecialFooter)