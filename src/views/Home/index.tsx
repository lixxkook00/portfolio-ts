import React from 'react';
import { projects } from '../../data/projects';
import { getUserVisitInfor } from '../../utils/teleBot';


type Props = {};

const Home: React.FC<Props> = () => {

    // console.log(projects)

    getUserVisitInfor()

    return (
        <div>
            HOME
        </div>
    );
};

export default Home;