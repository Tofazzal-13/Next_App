import Image from "next/image";

const AboutPage = () => {
    return (
        <div>
            <h2>This is About page</h2>
            <Image
                loading="eager"
                src="https://i.ibb.co.com/BK6XLyCj/skysports-kane-williamson-new-zealand-7069504.jpg"
                alt="don pic"
                width="500"
                height="300"
            ></Image>
            <Image
                loading="eager"
                src="/don.jpg"
                alt="don pic"
                width="500"
                height="300"

            ></Image>
        </div>
    );
};

export default AboutPage;