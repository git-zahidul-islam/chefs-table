// import PropTypes from 'prop-types';
import Background from '../../assets/Cover-photo.png'

const Banner = () => {
    return (
        <div className="px-2">
            <div className="hero h-[600px] rounded-3xl" style={{ backgroundImage: `url(${Background})` }}>
                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl">
                        <h1 className="mb-5 lg:text-5xl md:text-4xl text-3xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5 font-normal text-lg text-white">Welcome to the kingdom of collective food.You will get more than 120+ foods from us.You can come to eat your favorite food ,And you can bring your classmates</p>
                        <div className='flex gap-6 justify-center'>
                            <button className="btn rounded-full bg-[#0BE58A] border-none font-semibold text-xl">Explore Now</button>
                            <button className="btn rounded-full bg-transparent text-white border-[1px] border-[#FFFFFF] font-semibold text-xl">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {

};

export default Banner;