import React from 'react';
import { getUserInfor } from 'services/teleBot';


type Props = {};

const Home: React.FC<Props> = () => {

    // console.log(projects)

    getUserInfor()

    return (
        <div>
            HOME
        </div>
    );
};

export default Home;