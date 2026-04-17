import Image from "next/image";
export const metadata = {
  title: 'About',
  description: 'all the users information',
}

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
                width={500}
                height={300}         
            />
        </div>
    );
};

export default AboutPage;