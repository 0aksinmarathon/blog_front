import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

import EqualizerIcon from "@material-ui/icons/Equalizer";
import FunctionsIcon from "@material-ui/icons/Functions";
import TranslateIcon from "@material-ui/icons/Translate";

import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";

const useStyles = makeStyles(styles);

export default function Education() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h2 className={classes.title}>Education</h2>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Highschool",
                    tabIcon: TranslateIcon,
                    tabContent: (
                      <span>
                        <h3>International Christian University Highschool </h3>
                        2009.04 ~ 2012.03
                        <h4> </h4>
                        <p>
                          This school, located in outskirt of Tokyo, Japan, is a quite unique environment. It
                          is technically a normal school but about 70% of whole
                          students are returnees from other countries. There
                          were only two school rules. Do not come to school in
                          swimsuit nor with geta, Japanese traditional wooden
                          flipflops.
                        </p>
                        <br />
                        <p>
                          Working and learning coraborratively with a kind of
                          people that I had never met shocked me at first, but
                          these experiences taught me how to get along with
                          those who grew up in completely different
                          environments. And this initial encounter with external
                          world led me to leave Japan for a while later on.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Undergraduate",
                    tabIcon: FunctionsIcon,
                    tabContent: (
                      <span>
                        <h3>International Christian University</h3>
                        2012.04 ~ 2016.06
                        <h4>B.A, Math Major, Psychology Minor </h4>
                        <h5></h5>
                        <p>
                          I entered the liberal arts university next to my
                          highschool, attracted by the phrase "Later
                          Specialization", since I had no clue about what I want
                          to learn in my future. While taking some general
                          education courses, I observed towards which direction
                          my interest is directed to and decied to major in
                          math, invited by abstract and beautiful world.
                        </p>
                        <br />
                        <p>
                          From the junior year, I joined the exchange program
                          and spent 1 academic year in Washington State, U.S.
                        </p>
                        <br />
                        <p>
                          After I came back, I started to work on my thesis
                          about topological group. Using mny extra time, I also
                          enjoyed activities in badminton club.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "PostGraduate",
                    tabIcon: EqualizerIcon,
                    tabContent: (
                      <span>
                        <h3>Katholieke Universiteit Leuven</h3>
                        2017.09 ~ 2019.09
                        <h4>M.S in Statistics</h4>
                        <p>
                           In this classic university near Brussels in Belgium, I learned statistics, which is
                           intensely related to math but more practical area for 2 years. 
                           In specific, I chose "general methodologies of statistics" track from some options 
                           to learn statistical methods widely.  
                        </p>
                        <br />
                        <p>
                          The program was managed in English so it was quite an international environment. 
                          While struglling with study, I enjoyed typical Belgium Nightlife with those people when I found time. 
                        </p>
                        <br />
                        <p>
                          I mainly conducted analyses in R, SAS and some other MCMC samplers such as OpenBUGS and Stan 
                          so I am capable of using those languages and softwares as well.
                          In the last semester, I focused on writing the mandatory thesis about non-parametric Bayesian models 
                          and it was succesfully accepted in Sep. 2019.
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
