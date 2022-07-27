import React from 'react';
import './style.css';

const About = () => {
    return (
        <>
            <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">About us</h1>
                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, rem quod mollitia dolore eos tempora eligendi reprehenderit hic, earum, officia inventore. Fuga possimus nesciunt officia amet repellat corrupti temporibus eveniet numquam totam ipsum perferendis molestiae delectus exercitationem distinctio saepe maxime et ad quo dicta tenetur odio, quisquam incidunt nisi! Possimus expedita veniam a nisi omnis, laboriosam voluptas id ex, totam tempora vero esse odit quis pariatur deserunt harum necessitatibus asperiores nihil quam nulla. Pariatur sit obcaecati molestiae dolorem soluta optio suscipit quas quaerat. Sunt, recusandae vitae consectetur animi error est tempora, similique, explicabo itaque earum dolorem cum suscipit accusamus quidem ea. Expedita facere ipsum necessitatibus dolorem, voluptatibus distinctio sit velit ratione atque repellendus, hic culpa vel. Illo rerum autem laboriosam.</p>
            </div>

            <div class="container">
                <div className='img-container'>
                    <img src="https://linuxhint.com/wp-content/uploads/2018/03/Skyline.jpg" />
                </div>
                <footer class="pt-4 my-md-5 pt-md-5 border-top">
                    <div class="row">
                        <div class="col-12 col-md">
                            <small class="d-block mb-3 text-muted">© 2022</small>
                        </div>
                        <div class="col-6 col-md">
                            <h5>Features</h5>
                            <ul class="list-unstyled text-small">
                                <li><a class="text-muted" href="#">Cool stuff</a></li>
                                <li><a class="text-muted" href="#">Random feature</a></li>
                                <li><a class="text-muted" href="#">Team feature</a></li>
                                <li><a class="text-muted" href="#">Stuff for developers</a></li>
                                <li><a class="text-muted" href="#">Another one</a></li>
                                <li><a class="text-muted" href="#">Last time</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-md">
                            <h5>Resources</h5>
                            <ul class="list-unstyled text-small">
                                <li><a class="text-muted" href="#">Resource</a></li>
                                <li><a class="text-muted" href="#">Resource name</a></li>
                                <li><a class="text-muted" href="#">Another resource</a></li>
                                <li><a class="text-muted" href="#">Final resource</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-md">
                            <h5>About</h5>
                            <ul class="list-unstyled text-small">
                                <li><a class="text-muted" href="#">Team</a></li>
                                <li><a class="text-muted" href="#">Locations</a></li>
                                <li><a class="text-muted" href="#">Privacy</a></li>
                                <li><a class="text-muted" href="#">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default About;
