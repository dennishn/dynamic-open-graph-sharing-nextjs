import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {CldImage, CldOgImage} from "next-cloudinary";

const MessagePage = ({ message }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
        <CldOgImage
            alt={message}
            src="https://res.cloudinary.com/dmwcbhehi/image/upload/v1712223446/samples/man-portrait.jpg"
            overlays={[
                {
                    position: {
                        x: 140,
                        y: 140,
                        angle: -20,
                        gravity: 'south_east',
                    },
                    text: {
                        fontFamily: 'Source Sans Pro',
                        fontSize: 120,
                        fontWeight: 'bold',
                        text: message,
                        color: "red",
                    }
                }
            ]}
        />
        <CldImage
            alt={message}
            src="https://res.cloudinary.com/dmwcbhehi/image/upload/v1712223446/samples/man-portrait.jpg"
            width={1333 / 2}
            height={2000 / 2}
            overlays={[
                {
                    position: {
                        x: 140,
                        y: 140,
                        angle: -20,
                        gravity: 'south_east',
                    },
                    text: {
                        fontFamily: 'Source Sans Pro',
                        fontSize: 120,
                        fontWeight: 'bold',
                        text: message,
                        color: "red",
                    }
                }
            ]}
        />
    </>
  );
}

export const getServerSideProps = (async ({params}) => {
    const message = (params?.message as string) || "no message";
    return {
        props: {
            message
        }
    };
}) satisfies GetServerSideProps<{ message: string }>;

export default MessagePage;
