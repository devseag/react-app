import data from './data';
import {useState, useMemo, useDeferredValue, useTransition} from 'react';

function App() {
    const [text, setText] = useState('');
    const [posts, setPosts] = useState(data);
    // const defferedValue = useDeferredValue(text);
    const [isPending, startTransition] = useTransition();

    const filteredPosts = useMemo(() => {
        return posts.filter(item => item.name.toLowerCase().includes(text));
        // return posts.filter(item => item.name.toLowerCase().includes(defferedValue));
    }, [text]);
    // }, [defferedValue]);

    const onValueChange = (e) => {
        // setText(e.target.value);
        startTransition(() => {
            setText(e.target.value);
        })        
    }

    return (
        <>
            <input value={text} type='text' onChange={onValueChange}/>

            <hr/>

            <div>
                {/* {filteredPosts.map(post => (
                    <div key={post._id}>
                        <h4>{post.name}</h4>
                    </div>
                ))} */}
                    {isPending ? <h4>Loading...</h4> :
                                    filteredPosts.map(post => (
                                        <div key={post._id}>
                                            <h4>{post.name}</h4>
                                        </div>
                                    ))}
            </div>
        </>
    );
}

export default App;
