import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Elem from './style';
import aboutUs from '../../assets/images/aboutUs.png';
import team1 from '../../assets/images/team1.png';
import team2 from '../../assets/images/team2.png';
import team3 from '../../assets/images/team3.png';
import TitleIcon from '../../assets/images/TitleIcon.svg';

const HomeStaticContent = () => {
  
  return (
    <div>
        <Elem.AboutUsWrapper>
            <Container> 
                <Row>
                    <Col xs={12}>
                        <Elem.AboutUsImage>
                            <img src={aboutUs} alt="text" />
                        </Elem.AboutUsImage>
                    </Col>
                    <Col xs={12}>
                        <Elem.TitleIcon>
                            <img src={TitleIcon} title="TitleIcon" />
                        </Elem.TitleIcon>
                        <Elem.SectionTitle>About GalaMela</Elem.SectionTitle>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros ipsum, interdum at mattis sed,
                            tempus ultricies metus. Fusce lobortis odio ac dolor hendrerit aliquam.
                            Etiam consequat lobortis ex in viverra. Donec dolor libero, eleifend non tortor sed, sodales pharetra est.
                            Nam neque enim, mollis vitae elit vitae, tincidunt congue sapien. 
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                        <p> Phasellus malesuada congue facilisis. Sed ante tellus, porttitor a felis eget, convallis consequat dui.Nullam tincidunt ante ut lectus finibus,
                            sit amet varius erat euismod.</p>
                    </Col>
                </Row>
            </Container> 
        </Elem.AboutUsWrapper>
        <Elem.OurTeamWrapper>
            <Container> 
                <Row>
                    <Col xs={12}>
                        <Elem.TitleIcon>
                            <img src={TitleIcon} title="TitleIcon" />
                        </Elem.TitleIcon>
                        <Elem.SectionTitle>Our Team</Elem.SectionTitle>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros ipsum, interdum at mattis sed, 
                            tempus ultricies metus. Fusce lobortis odio ac dolor hendrerit aliquam. Etiam consequat lobortis ex in 
                            viverra. Donec dolor libero, eleifend non tortor sed, sodales pharetra est. Nam neque enim,
                            mollis vitae elit vitae, tincidunt congue sapien. Class aptent taciti sociosqu ad litora torquent per 
                            conubia nostra, per inceptos himenaeos. Phasellus malesuada congue facilisis
                        </p>
                    </Col>
                    <Col xs={12}>
                        <Elem.TeamMembersWrapper>
                            <Elem.TeamMemberWrapper>
                                <div>
                                    <img src={team1} alt="team member" />
                                </div>
                                <h6>Ajay Sharma</h6>
                                <p>Designation</p>
                            </Elem.TeamMemberWrapper>
                            <Elem.TeamMemberWrapper>
                                <div>
                                    <img src={team2} alt="team member" />
                                </div>
                                <h6>Ajay Sharma</h6>
                                <p>Designation</p>
                            </Elem.TeamMemberWrapper>
                            <Elem.TeamMemberWrapper>
                                <div>
                                    <img src={team3} alt="team member" />
                                </div>
                                <h6>Ajay Sharma</h6>
                                <p>Designation</p>
                            </Elem.TeamMemberWrapper>
                        </Elem.TeamMembersWrapper>
                    </Col>
                </Row>
            </Container> 
        </Elem.OurTeamWrapper>
    </div>
  );
}

export default HomeStaticContent;