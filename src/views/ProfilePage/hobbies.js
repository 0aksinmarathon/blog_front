import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
// core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import styles from "assets/jss/material-kit-react/views/profilePage.js";

import StraightenIcon from "@material-ui/icons/Straighten";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";

import InfoArea from "../../components/InfoArea/InfoArea.js";
import badmintonIcon from "@iconify/icons-mdi/badminton";

import { Icon, InlineIcon } from "@iconify/react";

function badmintonIcon1() {
    return <Icon icon={badmintonIcon} height={"61px"} height={"61px"} />;
  }
  

const useStyles = makeStyles(styles);

export default function Hobbies() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Non-academic stuffs</h2>
          <h5 className={classes.description}>
            Some friends of mine tell me that it seems like I{"'"}m not
            interested in anything but that{"'"}s not true at all. I am
            interested in so many things that the opposite seems to be true.
            Following is, not all but a part of my interests. 
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Badminton"
              description="Since I started when I was 12, I have been playing badminton continously. 
              Playing singles is quite too intense so I prefer playing doubles, epecially in later years.
              Not only in a part of school club activities, but also I play in some local teams, mainly managed by older people 
              (Note that the fact they are older than me does not necessarily mean that they are easy plyers to play against).
              I also love watching badminton games on Youtube Live. Honestly, the time I watch games is when I can be most emotional, sad or happy in my daily life. 
              So yes, I'm really into it.
              "
              icon={badmintonIcon1}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Piano"
              description="I really wanted to learn to play some musical instruments so 
              I started practicing playing thr piano, right after I entered my undergraduate university. 
              Learning to play musical instruments is similar to learn foreign language, 
              I felt that I can never be better with the same speed that children learn but I kept playing persistently, 
              sometime intermittently when I have time through my undergraduate and post-graduate life.  
              "
              icon={StraightenIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Camera"
              description="Taking picture is nice. It gets me relaxed and excited at the same time. 
              It gives me motivation, the reason and bravery to get myself out of my room. It provides me with the conversation topic
              when I talk with my friends or colleagues. It is not always necessary to upload photos on social networks. It works as my memory preservative. 
              It is often enough to see those photos, grinning, looking back the joyful time I spent in the past. 
              Taking picture is similar to solving optimization problems where you find the solution under some restrictions.     
              "
              icon={Camera}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
