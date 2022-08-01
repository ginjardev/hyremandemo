import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Button, List, Line } from "components";

const DASHBOARDPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/resumebank");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center mx-[auto] lg:pr-[25px] xl:pr-[28px] 2xl:pr-[32px] pr-[39px] w-[100%]">
        <Row className="justify-evenly w-[100%]">
          <aside className="lg:pr-[33px] xl:pr-[38px] 2xl:pr-[43px] pr-[52px] w-[19%]">
            <Column className="">
              <Column className="bg-bluegray_901 2xl:p-[10px] p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]">
                <Img
                  src="images/img_group100000430.png"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:mr-[23px] xl:mr-[26px] 2xl:mr-[30px] mr-[36px] 2xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[75%]"
                  alt="Group100000430"
                />
                <Row className="bg-white_A700 items-center justify-evenly lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] mt-[25px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] p-[9px] rounded-radius5 w-[100%]">
                  <Img
                    src="images/img_grid_black_900.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] lg:w-[11px] xl:w-[13px] 2xl:w-[15px] w-[18px]"
                    alt="grid"
                  />
                  <Text className="capitalize font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    Dashboard
                  </Text>
                </Row>
                <Column className="items-center lg:mb-[44px] xl:mb-[51px] 2xl:mb-[57px] mb-[69px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] mx-[auto] w-[94%]">
                  <div className="w-[96%]">
                    <Row className="items-center rounded-radius5 w-[100%]">
                      <Img
                        src="images/img_mail.png"
                        className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[9%]"
                        alt="mail"
                      />
                      <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                        Jobs
                      </Text>
                    </Row>
                  </div>
                  <Row className="items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] rounded-radius5 w-[96%]">
                    <Img
                      src="images/img_user.png"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] w-[9%]"
                      alt="user"
                    />
                    <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                      Candidates
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] rounded-radius5 w-[96%]">
                    <Img
                      src="images/img_creditcard.png"
                      className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] h-[20px] 3xl:h-[21px] my-[0] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] w-[20px]"
                      alt="creditcard"
                    />
                    <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                      Test Library
                    </Text>
                  </Row>
                  <div className="lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] mt-[25px] w-[97%]">
                    <Row
                      className="common-pointer items-center rounded-radius5 w-[100%]"
                      onClick={handleNavigate1}
                    >
                      <Img
                        src="images/img_home_white_A700.png"
                        className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] w-[24px]"
                        alt="home"
                      />
                      <Text className="capitalize font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] ml-[20px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                        Resume Bank
                      </Text>
                    </Row>
                  </div>
                  <Row className="items-center lg:mt-[430px] xl:mt-[492px] 2xl:mt-[553px] mt-[664px] rounded-radius5 w-[100%]">
                    <Img
                      src="images/img_settings.png"
                      className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                      alt="settings"
                    />
                    <Text className="capitalize font-medium lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] my-[0] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                      Settings
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] mt-[36px] rounded-radius5 w-[100%]">
                    <Img
                      src="images/img_vector.png"
                      className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[9%]"
                      alt="Vector"
                    />
                    <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                      log Out
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Column>
          </aside>
          <Column className="items-center lg:mb-[472px] xl:mb-[540px] 2xl:mb-[607px] mb-[729px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] mt-[24px] w-[81%]">
            <header className="w-[100%]">
              <Row className="bg-white_A700 border border-gray_600_19 border-solid items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] p-[7px] rounded-radius10 w-[100%]">
                <Text className="capitalize cursor-pointer hover:font-medium font-medium mb-[1px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] text-[30px] text-black_900 w-[auto]">
                  DASHBOARD
                </Text>
                <Button
                  className="2xl:ml-[743px] flex items-center justify-center lg:ml-[577px] ml-[891px] text-center w-[5%] xl:ml-[660px]"
                  leftIcon={
                    <Img
                      src="images/img_grid.png"
                      className="w-[10px] h-[10px] mr-[10px] text-center lg:w-[6px] lg:h-[7px] lg:mr-[6px] xl:w-[7px] xl:h-[8px] xl:mr-[7px] 2xl:w-[8px] 2xl:h-[9px] 2xl:mr-[8px] 3xl:h-[11px]"
                      alt="grid"
                    />
                  }
                  shape="RoundedBorder10"
                  size="sm"
                  variant="FillBlue800"
                >
                  <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                    Add
                  </div>
                </Button>
                <Button
                  className="flex lg:h-[26px] xl:h-[30px] 2xl:h-[34px] h-[40px] 3xl:h-[41px] items-center justify-center lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] ml-[40px] rounded-radius50 lg:w-[25px] xl:w-[29px] 2xl:w-[33px] w-[40px]"
                  size="smIcn"
                  variant="icbFillGray300"
                >
                  <Img
                    src="images/img_iconsalerts_gray_600.png"
                    className="flex items-center justify-center"
                    alt="IconsAlerts"
                  />
                </Button>
                <Img
                  src="images/img_iconartwork.png"
                  className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[40px] ml-[49px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                  alt="user One"
                />
              </Row>
            </header>
            <Row className="items-center justify-between lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] mt-[20px] w-[100%]">
              <List
                className="lg:gap-[31px] xl:gap-[35px] 2xl:gap-[40px] gap-[48px] grid grid-cols-2 mb-[1px] min-h-[auto] w-[65%]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 border border-gray_600_33 border-solid lg:py-[11px] xl:py-[12px] 2xl:py-[14px] py-[17px] rounded-radius10 w-[100%]">
                  <Text className="capitalize font-medium lg:ml-[16px] xl:ml-[18px] 2xl:ml-[20px] ml-[25px] lg:mr-[233px] xl:mr-[267px] 2xl:mr-[301px] mr-[361px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    Jobs
                  </Text>
                  <Line className="bg-bluegray_102 h-[1px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] mt-[18px] w-[100%]" />
                  <Button
                    className="flex lg:h-[29px] xl:h-[33px] 2xl:h-[37px] h-[44px] 3xl:h-[45px] items-center justify-center lg:mt-[36px] xl:mt-[41px] 2xl:mt-[46px] mt-[56px] mx-[auto] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] w-[44px]"
                    shape="icbCircleBorder20"
                    size="mdIcn"
                    variant="icbFillYellow80019"
                  >
                    <Img
                      src="images/img_jobslogo.png"
                      className="flex items-center justify-center"
                      alt="JobsLogo"
                    />
                  </Button>
                  <Text className="capitalize font-medium lg:mb-[62px] xl:mb-[71px] 2xl:mb-[80px] mb-[96px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] mx-[auto] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_401 w-[auto]">
                    no jobs
                  </Text>
                </Column>
                <Column className="bg-white_A700 border border-gray_600_33 border-solid lg:py-[11px] xl:py-[12px] 2xl:py-[14px] py-[17px] rounded-radius10 w-[100%]">
                  <Text className="capitalize font-medium lg:ml-[16px] xl:ml-[18px] 2xl:ml-[20px] ml-[25px] lg:mr-[197px] xl:mr-[226px] 2xl:mr-[254px] mr-[305px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    Candidates
                  </Text>
                  <Line className="bg-bluegray_102 h-[1px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] mt-[18px] w-[100%]" />
                  <Button
                    className="flex lg:h-[29px] xl:h-[33px] 2xl:h-[37px] h-[44px] 3xl:h-[45px] items-center justify-center lg:mt-[36px] xl:mt-[42px] 2xl:mt-[47px] mt-[57px] mx-[auto] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] w-[44px]"
                    shape="icbCircleBorder20"
                    size="mdIcn"
                    variant="icbFillLightgreenA70019"
                  >
                    <Img
                      src="images/img_candidateslogo.png"
                      className="flex items-center justify-center"
                      alt="CandidatesLogo"
                    />
                  </Button>
                  <Text className="capitalize font-medium lg:mb-[61px] xl:mb-[70px] 2xl:mb-[79px] mb-[95px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] mx-[auto] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_401 w-[auto]">
                    no Candidates
                  </Text>
                </Column>
              </List>
              <Column className="bg-white_A700 border border-gray_600_33 border-solid items-center 2xl:py-[10px] py-[13px] lg:py-[8px] xl:py-[9px] rounded-radius10 w-[31%]">
                <Row className="items-center justify-between w-[88%]">
                  <Text className="capitalize font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    Appointments
                  </Text>
                  <Row className="bg-bluegray_101 items-center justify-between p-[2px] rounded-radius16 w-[46%]">
                    <Button
                      className="font-medium 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-center w-[49%]"
                      shape="CircleBorder14"
                      size="sm"
                      variant="FillWhiteA700"
                    >
                      Today
                    </Button>
                    <Text className="font-medium xl:mr-[5px] lg:mr-[5px] 2xl:mr-[6px] mr-[8px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
                      Yesterday
                    </Text>
                  </Row>
                </Row>
                <Line className="bg-bluegray_102 h-[1px] xl:mt-[10px] 2xl:mt-[11px] mt-[14px] lg:mt-[9px] w-[100%]" />
                <Button
                  className="flex lg:h-[29px] xl:h-[33px] 2xl:h-[37px] h-[44px] 3xl:h-[45px] items-center justify-center lg:mt-[36px] xl:mt-[42px] 2xl:mt-[47px] mt-[57px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] w-[44px]"
                  shape="icbCircleBorder20"
                  size="mdIcn"
                  variant="icbFillDeeporange50019"
                >
                  <Img
                    src="images/img_appointmentlog.png"
                    className="flex items-center justify-center"
                    alt="AppointmentLog"
                  />
                </Button>
                <Text className="capitalize font-medium lg:mb-[64px] xl:mb-[73px] 2xl:mb-[82px] mb-[99px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_401 w-[auto]">
                  No Appointments
                </Text>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DASHBOARDPage;
