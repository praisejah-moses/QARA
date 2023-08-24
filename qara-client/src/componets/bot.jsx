import Image from "next/image";

function Bot() {
    return (
        <div className="fixed bottom-[30px] right-[30px] z-50 chatbox text-black">
            <div className="chatbox__support">
                <div className="chatbox__header">
                    <div className="chatbox__image--header">
                        <Image
                        src={'/female-skin.png'}
                        width={50}
                        height={50}
                        style={{ width:'50px', height:'50px' }}
                        alt="image"
                        />
                    </div>
                    <div className="chatbox__content--header">
                        <h4 className="chatbox__heading--header">Chat support</h4>
                        <p className="chatbox__description--header">Hi. My name is Sam. How can I help you?</p>
                    </div>
                </div>
                <div className="chatbox__messages">
                    <div></div>
                </div>
                <div className="chatbox__footer">
                    <input type="text" placeholder="Write a message..."/>
                    <button className="chatbox__send--footer send__button">Send</button>
                </div>
            </div>
            <div className="chatbox__button">
                <button>
                    <Image
                    src={'/qara-logo.png'}
                    width={100}
                    height={100}
                    style={{ width:'50px', height:'50px' }}
                    alt="logo"
                priority
                    />
                </button>
            </div>
            <script src="./app.js"></script>
        </div>
    );
}

export default Bot;