import {useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
const usePlaylist = (songs) => {
    const [audioList, setStatus] = useState();
    // const songs = useSelector(
    //     ({ songs_reducer: { all_songs } }) => all_songs
    //   );
    
    //  function loggerMy (foo) {
    //     console.log(foo)
    //  }
    //  const loMy = loggerMy
     
    // if (songs.length === 0) {
    //     return <div>LOAD...</div>
    // }
    // loMy(songs)
    // if (songs.length === 0) {
    //     return <div>....</div>
    // }
    // console.log(songs)
    
    useEffect(() => {
        if (songs) {
      listNow(songs);
        }
    }, []);

    const listNow = () => {
        const audiosongs1 = songs.map((song) => {
            const container = {};
            container.name = song.name;
            container.src = song.audio1;
            container.aud_name = song.audio_name1;
            return container;
        }
        )
        const audiosongs2 = songs.map((song) => {
            const container = {};
            container.name = song.name;
            container.src = song.audio2;
            container.aud_name = song.audio_name2;
            return container;
        }
        )
        const audiosongs3 = songs.map((song) => {
            const container = {};
            container.name = song.name;
            container.src = song.audio3;
            container.aud_name = song.audio_name3;
            return container;
        }
        )
        const audiosongs4 = songs.map((song) => {
            const container = {};
            container.name = song.name;
            container.src = song.video1;
            container.aud_name = song.video_name1;
            return container;
        }
        )
        const audiosongs5 = songs.map((song) => {
            const container = {};
            container.name = song.name;
            container.src = song.video2;
            container.aud_name = song.video_name2;
            return container;
        }
        )
        const audiosongs6 = songs.map((song) => {
            const container = {};
            container.name = song.name;
            container.src = song.video3;
            container.aud_name = song.video_name3;

            return container;
        }
        )

        const audioList = [...audiosongs1, ...audiosongs2, ...audiosongs3, ...audiosongs4, ...audiosongs5, ...audiosongs6]
            .filter(e => e.src !== '')

        return setStatus(audioList)
    }
    
     return {audioList, listNow};   
}
export default  usePlaylist