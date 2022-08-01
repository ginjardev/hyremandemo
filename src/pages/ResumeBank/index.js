import React from "react";

import { useNavigate } from "react-router-dom";
import { Stack, Column, Img, Row, Text, Button, Slider } from "components";

const ResumeBankPage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    navigate("/candidateview");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Stack className="bg-white_A700 font-poppins h-[1144px] 3xl:h-[1145px] lg:h-[742px] xl:h-[849px] 2xl:h-[954px] mx-[auto] lg:pr-[23px] xl:pr-[26px] 2xl:pr-[30px] pr-[36px] w-[100%]">
        <Stack className="absolute h-[1144px] 3xl:h-[1145px] lg:h-[742px] xl:h-[849px] 2xl:h-[954px] right-[1%] w-[99%]">
          <aside className="absolute items-center left-[0] w-[16%]">
            <Column className="">
              <Column className="bg-bluegray_901 2xl:p-[10px] p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]">
                <Img
                  src="images/img_group100000430.png"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:mr-[23px] xl:mr-[26px] 2xl:mr-[30px] mr-[36px] 2xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[75%]"
                  alt="Group100000430"
                />
                <Column className="items-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] mt-[35px] mx-[auto] w-[90%]">
                  <Row className="items-center rounded-radius5 w-[100%]">
                    <Img
                      src="images/img_plus.png"
                      className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] lg:w-[11px] xl:w-[13px] 2xl:w-[15px] w-[18px]"
                      alt="plus"
                    />
                    <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                      Dashboard
                    </Text>
                  </Row>
                  <div className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] w-[100%]">
                    <Column className="items-center w-[100%]">
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
                      <Row className="items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] rounded-radius5 w-[100%]">
                        <Img
                          src="images/img_user.png"
                          className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] w-[9%]"
                          alt="user"
                        />
                        <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          Candidates
                        </Text>
                      </Row>
                    </Column>
                  </div>
                  <Row className="items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] rounded-radius5 w-[100%]">
                    <Img
                      src="images/img_creditcard.png"
                      className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] h-[20px] 3xl:h-[21px] my-[0] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] w-[20px]"
                      alt="creditcard"
                    />
                    <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                      Test Library
                    </Text>
                  </Row>
                </Column>
                <div className="lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] w-[100%]">
                  <Button
                    className="flex items-center justify-center text-center w-[100%]"
                    leftIcon={
                      <Img
                        src="images/img_home.png"
                        className="w-[24px] h-[24px] mr-[20px] text-center lg:w-[15px] lg:h-[16px] lg:mr-[12px] xl:w-[17px] xl:h-[18px] xl:mr-[14px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[16px] 3xl:h-[25px]"
                        alt="home"
                      />
                    }
                    shape="RoundedBorder5"
                    size="md"
                    variant="FillWhiteA700"
                  >
                    <div className="bg-transparent capitalize font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                      Resume Bank
                    </div>
                  </Button>
                </div>
                <Column className="items-center lg:mb-[44px] xl:mb-[51px] 2xl:mb-[57px] mb-[69px] lg:mt-[425px] xl:mt-[486px] 2xl:mt-[547px] mt-[656px] mx-[auto] w-[94%]">
                  <Row className="items-center rounded-radius5 w-[100%]">
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
          <Column className="absolute inset-x-[0] items-end mx-[auto] top-[2%] w-[98%]">
            <Slider
              slidesToShow={2}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              activeSlideCSS="scale-[1.00]"
              ref={sliderRef}
              className="w-[100%]"
              items={[...Array(6)].map(() => (
                <>
                  <Row className="bg-white_A700 border border-gray_600_19 border-solid items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] p-[7px] rounded-radius10 w-[100%]">
                    <Text className="capitalize font-medium mb-[1px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] text-[30px] text-black_900 w-[auto]">
                      rESUME BANK
                    </Text>
                    <Button
                      className="2xl:ml-[728px] flex items-center justify-center lg:ml-[565px] ml-[873px] text-center w-[5%] xl:ml-[647px]"
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
                        src="images/img_iconsalerts.png"
                        className="flex items-center justify-center"
                        alt="IconsAlerts"
                      />
                    </Button>
                    <Img
                      src="images/img_user_gray_600.png"
                      className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[40px] ml-[49px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                      alt="user One"
                    />
                  </Row>
                </>
              ))}
              Indicator={({ isActive }) => {
                if (isActive) {
                  return <div className="" />;
                }
                return <div className="" role="button" tabIndex={0} />;
              }}
            />
            <Row className="justify-end ml-[auto] mr-[1px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] mt-[32px] w-[15%]">
              <Img
                src="images/img_arrowright.png"
                className="cursor-pointer xl:h-[10px] 2xl:h-[11px] h-[13px] 3xl:h-[14px] lg:h-[9px] mb-[1px] w-[3%]"
                onClick={() => sliderRef.current?.slidePrev()}
                alt="arrowright"
              />
              <Img
                src="images/img_arrowright.png"
                className="cursor-pointer xl:h-[10px] 2xl:h-[11px] h-[13px] 3xl:h-[14px] lg:h-[9px] lg:ml-[147px] xl:ml-[168px] 2xl:ml-[189px] ml-[227px] mt-[1px] w-[3%]"
                onClick={() => sliderRef.current?.slideNext()}
                alt="arrowright One"
              />
            </Row>
          </Column>
        </Stack>
        <Column className="absolute bg-gray_100 border-bw02 border-gray_600 border-solid left-[18%] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] p-[20px] rounded-radius10 top-[9%] w-[21%]">
          <Text className="font-medium ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
            Education
          </Text>
          <Row className="bg-white_A700 border border-gray_400 border-solid items-center ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] p-[5px] rounded-radius10 w-[94%]">
            <Button
              className="flex items-center justify-center ml-[3px] text-center w-[19%]"
              rightIcon={
                <Img
                  src="images/img_close.png"
                  className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                  alt="close"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillBluegray101"
            >
              <div className="bg-transparent font-normal not-italic 2xl:text-[10px] text-[12px] lg:text-[7px] xl:text-[8px]">
                Bsc
              </div>
            </Button>
            <Button
              className="2xl:ml-[8px] flex items-center justify-center lg:ml-[6px] ml-[10px] text-center w-[20%] xl:ml-[7px]"
              rightIcon={
                <Img
                  src="images/img_close.png"
                  className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                  alt="close"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillBluegray101"
            >
              <div className="bg-transparent font-normal not-italic 2xl:text-[10px] text-[12px] lg:text-[7px] xl:text-[8px]">
                HND
              </div>
            </Button>
          </Row>
          <Text className="font-medium ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
            Gender
          </Text>
          <Row className="bg-white_A700 border border-gray_400 border-solid items-center justify-between ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] xl:p-[5px] lg:p-[5px] 2xl:p-[6px] p-[8px] rounded-radius10 w-[94%]">
            <Text className="font-normal my-[1px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              Female
            </Text>
            <Img
              src="images/img_arrowdown.png"
              className="lg:h-[4px] xl:h-[5px] h-[6px] 3xl:h-[7px] mr-[10px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] w-[3%]"
              alt="arrowdown"
            />
          </Row>
          <Text className="font-medium ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
            Location
          </Text>
          <Row className="bg-white_A700 border border-gray_400 border-solid items-center ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] p-[5px] rounded-radius10 w-[94%]">
            <Button
              className="flex items-center justify-center ml-[3px] text-center w-[26%]"
              rightIcon={
                <Img
                  src="images/img_close.png"
                  className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                  alt="close"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillBluegray101"
            >
              <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                Tema
              </div>
            </Button>
            <Button
              className="2xl:ml-[8px] flex items-center justify-center lg:ml-[6px] ml-[10px] text-center w-[26%] xl:ml-[7px]"
              rightIcon={
                <Img
                  src="images/img_close.png"
                  className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                  alt="close"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillBluegray101"
            >
              <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                Accra
              </div>
            </Button>
          </Row>
          <Text className="font-medium ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
            Country
          </Text>
          <Column className="bg-white_A700 border border-gray_400 border-solid ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] p-[5px] rounded-radius10 w-[94%]">
            <Button
              className="flex items-center justify-center ml-[3px] text-center w-[28%]"
              rightIcon={
                <Img
                  src="images/img_close.png"
                  className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                  alt="close"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillBluegray101"
            >
              <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                Ghana
              </div>
            </Button>
          </Column>
          <Text className="font-medium ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
            Tools
          </Text>
          <Row className="bg-white_A700 border border-gray_400 border-solid items-center ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] p-[5px] rounded-radius10 w-[94%]">
            <Button
              className="flex items-center justify-center ml-[3px] text-center w-[30%]"
              rightIcon={
                <Img
                  src="images/img_close.png"
                  className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                  alt="close"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillBluegray101"
            >
              <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                G-Suite
              </div>
            </Button>
            <Button
              className="2xl:ml-[8px] flex items-center justify-center lg:ml-[6px] ml-[10px] text-center w-[27%] xl:ml-[7px]"
              rightIcon={
                <Img
                  src="images/img_close.png"
                  className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                  alt="close"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillBluegray101"
            >
              <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                Figma
              </div>
            </Button>
          </Row>
          <Text className="font-medium ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
            Skills & Expertise
          </Text>
          <Row className="bg-white_A700 border border-gray_400 border-solid items-center ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] p-[5px] rounded-radius10 w-[94%]">
            <Button
              className="flex items-center justify-center ml-[3px] text-center w-[26%]"
              rightIcon={
                <Img
                  src="images/img_close.png"
                  className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                  alt="close"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillBluegray101"
            >
              <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                React
              </div>
            </Button>
            <Button
              className="2xl:ml-[8px] flex items-center justify-center lg:ml-[6px] ml-[10px] text-center w-[30%] xl:ml-[7px]"
              rightIcon={
                <Img
                  src="images/img_close.png"
                  className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                  alt="close"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillBluegray101"
            >
              <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                Angular
              </div>
            </Button>
          </Row>
          <Text className="font-medium ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
            Experience
          </Text>
          <Row className="bg-white_A700 border border-gray_400 border-solid mb-[119px] lg:mb-[77px] xl:mb-[88px] 2xl:mb-[99px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] p-[5px] rounded-radius10 w-[94%]">
            <Button
              className="flex items-center justify-center ml-[3px] text-center w-[37%]"
              rightIcon={
                <Img
                  src="images/img_close.png"
                  className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                  alt="close"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillBluegray101"
            >
              <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                Entry Level
              </div>
            </Button>
            <Button
              className="2xl:ml-[8px] flex items-center justify-center lg:ml-[6px] ml-[10px] text-center w-[33%] xl:ml-[7px]"
              rightIcon={
                <Img
                  src="images/img_close.png"
                  className="w-[8px] h-[8px] ml-[10px] text-center lg:w-[5px] lg:h-[6px] lg:ml-[6px] xl:w-[5px] xl:h-[6px] xl:ml-[7px] 2xl:w-[6px] 2xl:h-[7px] 2xl:ml-[8px] 3xl:h-[9px]"
                  alt="close"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillBluegray101"
            >
              <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                Mid Level
              </div>
            </Button>
            <Img
              src="images/img_arrowdown.png"
              className="lg:h-[4px] xl:h-[5px] h-[6px] 3xl:h-[7px] 2xl:mb-[10px] mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] ml-[52px] mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[3%]"
              alt="arrowdown One"
            />
          </Row>
        </Column>
        <Column
          className="common-pointer absolute border-bw03 border-gray_600 border-solid items-center p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] right-[0] rounded-radius20 top-[14%] w-[56%]"
          onClick={handleNavigate4}
        >
          <Row className="items-center pl-[0] py-[0] w-[100%]">
            <Img
              src="images/img_iconartwork.png"
              className="h-[101px] 3xl:h-[102px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] ml-[1px] w-[101px] lg:w-[65px] xl:w-[74px] 2xl:w-[84px]"
              alt="IconArtwork"
            />
            <Column className="lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] lg:pr-[57px] xl:pr-[65px] 2xl:pr-[74px] pr-[89px] w-[28%]">
              <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
                Regina Boatema
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Accra, Ghana
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Female
              </Text>
            </Column>
            <Column className="lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] lg:pr-[57px] xl:pr-[65px] 2xl:pr-[74px] pr-[89px] w-[40%]">
              <Text className="font-normal ml-[1px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Experience: Mid Level
              </Text>
              <Text className="font-normal 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Skills: React, Angular, Express.js, Nodejs
              </Text>
              <Text className="font-normal xl:mt-[11px] 2xl:mt-[12px] mt-[15px] lg:mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Education: Bsc Biochemical Engeneering
              </Text>
            </Column>
            <Button
              className="font-medium mb-[0] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] lg:text-[35px] xl:text-[41px] 2xl:text-[46px] text-[55.43px] 3xl:text-[55px] text-center w-[19%]"
              size="lg"
              variant="FillLightgreen50"
            >
              92%
            </Button>
          </Row>
          <Row className="items-center justify-between lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] mt-[20px] w-[60%]">
            <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-blue_800 w-[auto]">
              View Resume
            </Text>
            <Button
              className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[32%]"
              shape="RoundedBorder10"
              size="sm"
              variant="FillBlue800"
            >
              Shortlist Candidate
            </Button>
          </Row>
        </Column>
        <Column className="absolute border-bw03 border-gray_600 border-solid bottom-[33%] items-center p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] right-[0] rounded-radius20 w-[56%]">
          <Row className="items-center pl-[0] py-[0] w-[98%]">
            <Img
              src="images/img_iconartwork.png"
              className="h-[101px] 3xl:h-[102px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] ml-[1px] w-[101px] lg:w-[65px] xl:w-[74px] 2xl:w-[84px]"
              alt="IconArtwork One"
            />
            <Column className="lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] lg:pr-[57px] xl:pr-[65px] 2xl:pr-[74px] pr-[89px] w-[28%]">
              <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
                Serwaa Boateng
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Accra, Ghana
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Female
              </Text>
            </Column>
            <Column className="lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] lg:pr-[57px] xl:pr-[65px] 2xl:pr-[74px] pr-[89px] w-[39%]">
              <Text className="font-normal ml-[1px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Experience: Mid Level
              </Text>
              <Text className="font-normal 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Skills: React, Angular, Express.js, Nodejs
              </Text>
              <Text className="font-normal xl:mt-[11px] 2xl:mt-[12px] mt-[15px] lg:mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Education: Bsc Computer Science
              </Text>
            </Column>
            <Button
              className="font-medium mb-[0] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] lg:text-[35px] xl:text-[41px] 2xl:text-[46px] text-[55.43px] 3xl:text-[55px] text-center w-[19%]"
              size="lg"
              variant="FillLightgreen50"
            >
              73%
            </Button>
          </Row>
          <Row className="items-center justify-between lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] mt-[20px] w-[60%]">
            <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-blue_800 w-[auto]">
              View Resume
            </Text>
            <Button
              className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[32%]"
              shape="RoundedBorder10"
              size="sm"
              variant="FillBlue800"
            >
              Shortlist Candidate
            </Button>
          </Row>
        </Column>
        <Column className="absolute border-bw03 border-gray_600 border-solid items-center p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] right-[0] rounded-radius20 top-[32%] w-[56%]">
          <Row className="items-center pl-[0] py-[0] w-[100%]">
            <Img
              src="images/img_iconartwork.png"
              className="h-[101px] 3xl:h-[102px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] ml-[1px] w-[101px] lg:w-[65px] xl:w-[74px] 2xl:w-[84px]"
              alt="IconArtwork Two"
            />
            <Column className="lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] pr-[109px] lg:pr-[70px] xl:pr-[80px] 2xl:pr-[90px] w-[26%]">
              <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
                Bisi Babalola
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Accra, Ghana
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Female
              </Text>
            </Column>
            <Column className="lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] pr-[109px] lg:pr-[70px] xl:pr-[80px] 2xl:pr-[90px] w-[42%]">
              <Text className="font-normal ml-[1px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Experience: Mid Level
              </Text>
              <Text className="font-normal 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Skills: React, Angular, Express.js, Nodejs
              </Text>
              <Text className="font-normal xl:mt-[11px] 2xl:mt-[12px] mt-[15px] lg:mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Education: BEng Mehanical Engeneering
              </Text>
            </Column>
            <Button
              className="font-medium mb-[0] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] lg:text-[35px] xl:text-[41px] 2xl:text-[46px] text-[55.43px] 3xl:text-[55px] text-center w-[19%]"
              size="lg"
              variant="FillLightgreen50"
            >
              85%
            </Button>
          </Row>
          <Row className="items-center justify-between lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] mt-[20px] w-[60%]">
            <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-blue_800 w-[auto]">
              View Resume
            </Text>
            <Button
              className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[32%]"
              shape="RoundedBorder10"
              size="sm"
              variant="FillBlue800"
            >
              Shortlist Candidate
            </Button>
          </Row>
        </Column>
        <Column className="absolute border-bw03 border-gray_600 border-solid bottom-[15%] items-center p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] right-[0] rounded-radius20 w-[56%]">
          <Row className="items-center pl-[0] py-[0] w-[99%]">
            <Img
              src="images/img_iconartwork.png"
              className="h-[101px] 3xl:h-[102px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] ml-[1px] w-[101px] lg:w-[65px] xl:w-[74px] 2xl:w-[84px]"
              alt="IconArtwork Three"
            />
            <Column className="lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] lg:pr-[57px] xl:pr-[65px] 2xl:pr-[74px] pr-[89px] w-[28%]">
              <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
                Regina Boatema
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Tema, Ghana
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Female
              </Text>
            </Column>
            <Column className="lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] lg:pr-[57px] xl:pr-[65px] 2xl:pr-[74px] pr-[89px] w-[39%]">
              <Text className="font-normal ml-[1px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Experience: Mid Level
              </Text>
              <Text className="font-normal 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Skills: React, Angular, Express.js, Nodejs
              </Text>
              <Text className="font-normal xl:mt-[11px] 2xl:mt-[12px] mt-[15px] lg:mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Education: Bsc Actuarial Science
              </Text>
            </Column>
            <Button
              className="font-medium mb-[0] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] lg:text-[35px] xl:text-[41px] 2xl:text-[46px] text-[55.43px] 3xl:text-[55px] text-center w-[19%]"
              size="lg"
              variant="FillRed90033"
            >
              68%
            </Button>
          </Row>
          <Row className="items-center justify-between lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] mt-[20px] w-[60%]">
            <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-blue_800 w-[auto]">
              View Resume
            </Text>
            <Button
              className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[32%]"
              shape="RoundedBorder10"
              size="sm"
              variant="FillBlue800"
            >
              Shortlist Candidate
            </Button>
          </Row>
        </Column>
        <Text className="absolute font-medium left-[43%] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_601 top-[10%] w-[auto]">
          20 results
        </Text>
        <Row className="absolute items-center justify-center right-[0] top-[9%] w-[16%]">
          <div className="bg-white_A700 lg:h-[26px] xl:h-[30px] 2xl:h-[34px] h-[40px] 3xl:h-[41px] rotate-[180deg] w-[12%]"></div>
          <Button
            className="font-medium lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[14%]"
            shape="RoundedBorder5"
            size="md"
            variant="OutlineBlack900"
          >
            1
          </Button>
          <Button
            className="font-medium lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[16%]"
            shape="RoundedBorder5"
            size="md"
            variant="OutlineBlack900"
          >
            2
          </Button>
          <Button
            className="font-medium lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[16%]"
            shape="RoundedBorder5"
            size="md"
            variant="OutlineBlack900"
          >
            3
          </Button>
          <Button
            className="font-medium lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[16%]"
            shape="RoundedBorder5"
            size="md"
            variant="OutlineBlack900"
          >
            4
          </Button>
          <div className="bg-white_A700 lg:h-[26px] xl:h-[30px] 2xl:h-[34px] h-[40px] 3xl:h-[41px] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] w-[12%]"></div>
        </Row>
      </Stack>
    </>
  );
};

export default ResumeBankPage;
