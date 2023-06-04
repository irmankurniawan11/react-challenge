import { HeartIcon, ChatBubbleOvalLeftIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline'

function getTanggal(date) {
    var d = new Date(date);
    const month = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];
    return d.getHours() + "." + d.getMinutes() + " - " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();
}

const TwitterEmbed = () => {
    const tweets = [
        {
            "id": 139438,
            "timestamp":1684305909999,
            "user": {
                "id": 1,
                "user_name": "realjohndoe",
                "profil_name": "John Doe"
            },
            "text":"Nostrud ullamco quis culpa #EuCommodo culpa consectetur voluptate ut id magna eiusmod qui. 😂😂 #Deserunt #Consequat",
            "like_count": 231,
            "retweet_count": 32,
            "reply_count": 12
        }
    ]

    const Tweets = () => {
        return tweets.map((tweet, id)=>{
            return (
                <>
                    <TweetBox key={id} data={tweet}/>
                </>
            )
        })
    }

    return (
        <div className="bg-[#ECF8FF] h-[100vh] flex gap-4 justify-center items-center flex-col sm:flex-row px-6 sm:px-2 flex-wrap">
            <Tweets/>
        </div>
    )
}

const TweetBox = (props) => {
    var data = props.data;

    const hashtagRegex = /#(\w+)/g;
    const hashtags = data.text.match(hashtagRegex);

    const styleHashtags = () => {
        if (hashtags) {
            const styledString = data.text.split(hashtagRegex);
            return styledString.map((word, index) => {
                if (hashtags.includes(`#${word}`)) {
                    return <span key={index} className='text-blue-500 cursor-pointer'>#{word}</span>;
                }
                return word;
            });
        }
        return props.text;
    };

    return (
        <div className="text-slate-700 bg-white dark:bg-slate-800 dark:text-slate-50 rounded-2xl shadow-lg border border-slate-100 p-8 sm:max-w-xl flex flex-col space-y-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className="w-[50px] h-[50px] rounded-full bg-cyan-500 flex items-center justify-center">
                        <span className="text-white font-bold text-3xl">{data.user.profil_name[0]}</span>
                    </div>
                    <div className="ml-4">
                        <h1 className="font-bold">{data.user.profil_name}</h1>
                        <h1 className=" text-slate-400">@{data.user.user_name}</h1>
                    </div>
                </div>
                {/* <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold"> */}
                    {/* <span>T</span> */}
                    <img className="h-8 w-auto" src="/image/twitter-embed-twitter.svg" alt="Twitter"/>
                {/* </div> */}
            </div>
            <div>
                <p>{styleHashtags()}</p>
            </div>
            <div className='text-slate-400'>
                <p>{getTanggal(data.timestamp)}</p>
            </div>
            <div className="flex gap-4">
                <div className="flex items-center gap-2">
                    <ChatBubbleOvalLeftIcon className="h-6 w-6" aria-hidden="true"/>
                    <span>{data.reply_count}</span>
                </div>
                <div className="flex items-center gap-2">
                    <ArrowPathRoundedSquareIcon className="h-6 w-6" aria-hidden="true"/>
                    <span>{data.retweet_count}</span>
                </div>
                <div className="flex items-center gap-2">
                    <HeartIcon className="h-6 w-6" aria-hidden="true"/>
                    <span>{data.like_count}</span>
                </div>
            </div>
        </div>
    )
}

export default TwitterEmbed;