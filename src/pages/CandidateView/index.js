import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  List,
  SelectBox,
  Line,
} from "components";

const CandidateViewPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center mx-[auto] lg:pr-[15px] xl:pr-[17px] 2xl:pr-[20px] pr-[24px] w-[100%]">
        <Row className="justify-evenly w-[100%]">
          <aside className="lg:pr-[33px] xl:pr-[38px] 2xl:pr-[43px] pr-[52px] w-[19%]">
            <Column className="">
              <Column className="bg-bluegray_901 2xl:p-[10px] p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]">
                <Img
                  src="images/img_group100000430_white_A700.png"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:mr-[23px] xl:mr-[26px] 2xl:mr-[30px] mr-[36px] 2xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[75%]"
                  alt="Group100000430"
                />
                <Row className="items-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] mt-[35px] mx-[auto] rounded-radius5 w-[90%]">
                  <Img
                    src="images/img_plus.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] lg:w-[11px] xl:w-[13px] 2xl:w-[15px] w-[18px]"
                    alt="plus"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Dashboard
                  </Text>
                </Row>
                <div className="lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] w-[100%]">
                  <Column className="items-center w-[100%]">
                    <Row className="bg-white_A700 items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] p-[9px] rounded-radius5 w-[100%]">
                      <Img
                        src="images/img_mail_black_900.png"
                        className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] ml-[2px] w-[9%]"
                        alt="mail"
                      />
                      <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                        Jobs
                      </Text>
                    </Row>
                    <Row className="items-center lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] rounded-radius5 w-[91%]">
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
                <Column className="items-center lg:mb-[254px] xl:mb-[291px] 2xl:mb-[327px] mb-[393px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] mx-[auto] w-[94%]">
                  <Row className="items-center rounded-radius5 w-[96%]">
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
                    <Row className="items-center rounded-radius5 w-[100%]">
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
                      src="images/img_settings_white_A700.png"
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
          <Column className="items-center xl:mb-[107px] 2xl:mb-[120px] mb-[145px] lg:mb-[93px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] mt-[24px] w-[81%]">
            <header className="w-[99%]">
              <Row className="bg-white_A700 border border-gray_600_19 border-solid items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] p-[7px] rounded-radius10 w-[100%]">
                <Text className="capitalize cursor-pointer hover:font-medium font-medium mb-[1px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] text-[30px] text-black_900 w-[auto]">
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
            <Row className="items-center justify-evenly lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] mt-[36px] w-[100%]">
              <Column className="items-center lg:pr-[20px] xl:pr-[22px] 2xl:pr-[25px] pr-[31px] w-[63%]">
                <Column className="bg-white_A700 border-black_900 border-bw02 border-solid lg:p-[16px] xl:p-[19px] 2xl:p-[21px] p-[26px] w-[100%]">
                  <Row className="lg:ml-[23px] xl:ml-[27px] 2xl:ml-[30px] ml-[37px] mr-[105px] lg:mr-[68px] xl:mr-[77px] 2xl:mr-[87px] w-[82%]">
                    <Img
                      src="images/img_iconartwork.png"
                      className="h-[112px] 3xl:h-[113px] lg:h-[73px] xl:h-[84px] 2xl:h-[94px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[112px] lg:w-[72px] xl:w-[83px] 2xl:w-[93px]"
                      alt="IconArtwork"
                    />
                    <Column className="lg:mb-[22px] xl:mb-[25px] 2xl:mb-[28px] mb-[34px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] ml-[30px] w-[78%]">
                      <Row className="items-center w-[100%]">
                        <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
                          Regina Boatema
                        </Text>
                        <Button
                          className="flex lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] items-center justify-center 2xl:ml-[10px] ml-[13px] lg:ml-[8px] xl:ml-[9px] rounded-radius50 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] w-[24px]"
                          size="smIcn"
                          variant="icbOutlineBlack9007f"
                        >
                          <Img
                            src="images/img_akariconslink.png"
                            className="h-[12px] flex items-center justify-center lg:h-[8px] xl:h-[9px] 2xl:h-[11px] 3xl:h-[13px]"
                            alt="akariconslink"
                          />
                        </Button>
                        <Button
                          className="flex lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] items-center justify-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] ml-[5px] rounded-radius50 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] w-[24px]"
                          size="smIcn"
                          variant="icbOutlineBlack9007f"
                        >
                          <Img
                            src="images/img_akariconslink_black_900.png"
                            className="h-[12px] flex items-center justify-center lg:h-[8px] xl:h-[9px] 2xl:h-[11px] 3xl:h-[13px]"
                            alt="akariconslink One"
                          />
                        </Button>
                        <Button
                          className="flex lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] items-center justify-center lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] ml-[6px] rounded-radius50 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] w-[24px]"
                          size="smIcn"
                          variant="icbOutlineBlack9007f"
                        >
                          <Img
                            src="images/img_akariconslink_black_900_24X24.png"
                            className="flex items-center justify-center"
                            alt="akariconslink Two"
                          />
                        </Button>
                        <Img
                          src="images/img_iconartwork_gray_600.png"
                          className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] h-[16px] 3xl:h-[17px] lg:ml-[131px] xl:ml-[150px] 2xl:ml-[169px] ml-[203px] lg:w-[10px] xl:w-[11px] 2xl:w-[13px] w-[16px]"
                          alt="IconArtwork One"
                        />
                      </Row>
                      <Text className="font-normal xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_700 w-[auto]">
                        Accra
                      </Text>
                    </Column>
                  </Row>
                  <Column className="lg:mb-[43px] xl:mb-[49px] 2xl:mb-[55px] mb-[67px] lg:ml-[16px] xl:ml-[19px] 2xl:ml-[21px] ml-[26px] lg:mr-[14px] xl:mr-[17px] 2xl:mr-[19px] mr-[23px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] w-[94%]">
                    <List
                      className="gap-[0] min-h-[auto] ml-[2px] w-[91%]"
                      orientation="vertical"
                    >
                      <Row className="xl:my-[2px] lg:my-[2px] 2xl:my-[3px] my-[4px] w-[100%]">
                        <Text className="font-medium mb-[2px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900_7f w-[auto]">
                          Email
                        </Text>
                        <Text className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] my-[1px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
                          caroline.kpogo@gmail.com
                        </Text>
                        <Text className="font-medium ml-[111px] lg:ml-[71px] xl:ml-[82px] 2xl:ml-[92px] mt-[2px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900_7f w-[auto]">
                          Years of Experience
                        </Text>
                        <Text className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] mt-[3px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
                          2
                        </Text>
                      </Row>
                      <Row className="xl:my-[2px] lg:my-[2px] 2xl:my-[3px] my-[4px] w-[100%]">
                        <Text className="font-medium mt-[2px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900_7f w-[auto]">
                          Gender
                        </Text>
                        <Text className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] mt-[3px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
                          Female
                        </Text>
                        <Text className="font-medium mb-[2px] lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] ml-[53px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900_7f w-[auto]">
                          Resume
                        </Text>
                        <Text className="font-bold lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] my-[1px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
                          View
                        </Text>
                      </Row>
                      <Row className="xl:my-[2px] lg:my-[2px] 2xl:my-[3px] my-[4px] w-[100%]">
                        <Text className="font-medium mb-[3px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900_7f w-[auto]">
                          Phone
                        </Text>
                        <Text className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] my-[2px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
                          0209414362
                        </Text>
                        <Text className="font-medium lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] ml-[53px] mt-[3px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900_7f w-[auto]">
                          Cover Letter
                        </Text>
                        <Text className="font-bold lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] mt-[4px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
                          View
                        </Text>
                      </Row>
                      <Row className="xl:my-[2px] lg:my-[2px] 2xl:my-[3px] my-[4px] w-[100%]">
                        <Text className="font-medium mb-[1px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900_7f w-[auto]">
                          Country
                        </Text>
                        <Text className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] my-[1px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
                          Ghana
                        </Text>
                        <Text className="font-medium lg:ml-[36px] xl:ml-[41px] 2xl:ml-[46px] ml-[56px] mt-[1px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900_7f w-[auto]">
                          Expected Salary
                        </Text>
                        <Text className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] mt-[1px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
                          2000
                        </Text>
                      </Row>
                    </List>
                    <Row className="ml-[2px] mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[91%]">
                      <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900_7f w-[auto]">
                        Stage
                      </Text>
                      <SelectBox
                        className="bg-transparent font-normal lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] not-italic 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[12%]"
                        placeholderClassName="bg-transparent text-black_900"
                        name="Frame165"
                        placeholder="Interview"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_black_900.png"
                            className="w-[7.88px] h-[3.54px] mr-[0] lg:w-[5px] lg:h-[3px] xl:w-[5px] xl:h-[3px] 2xl:w-[6px] 2xl:h-[3px] 3xl:w-[7px] 3xl:h-[4px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                      <Text className="font-medium mb-[4px] lg:ml-[136px] xl:ml-[156px] 2xl:ml-[175px] ml-[211px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900_7f w-[auto]">
                        Expected Salary
                      </Text>
                      <Text className="font-medium mb-[4px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
                        2000
                      </Text>
                    </Row>
                    <Row className="ml-[2px] lg:mt-[44px] xl:mt-[51px] 2xl:mt-[57px] mt-[69px] w-[73%]">
                      <Text className="font-medium lg:mb-[41px] xl:mb-[47px] 2xl:mb-[53px] mb-[64px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_600 w-[auto]">
                        Experience
                      </Text>
                      <Column className="ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[82%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                            Senior Mobile Engineer at Hubtel Ghana Ltd
                          </Text>
                          <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_600 w-[auto]">
                            2019-2021
                          </Text>
                        </Row>
                        <Row className="items-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[79%]">
                          <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                            Mobile Developer at MEST Africa
                          </Text>
                          <Text className="font-medium 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_600 w-[auto]">
                            2018-2019
                          </Text>
                        </Row>
                        <Row className="items-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[75%]">
                          <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                            Mobile Enginer at MEST Africa
                          </Text>
                          <Text className="font-medium 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_600 w-[auto]">
                            2016-2018
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="justify-between lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] mt-[24px] w-[100%]">
                      <Text className="font-medium lg:mb-[20px] xl:mb-[23px] 2xl:mb-[26px] mb-[32px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_600 w-[auto]">
                        Education
                      </Text>
                      <Column className="w-[87%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                            Bachelor of Science in Computer Engineering at
                            University of Ghana
                          </Text>
                          <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_600 w-[auto]">
                            2010-2016
                          </Text>
                        </Row>
                        <Row className="items-center xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[73%]">
                          <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                            Fellow Association of Mobile Developers Ghana
                          </Text>
                          <Text className="font-medium 2xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_600 w-[auto]">
                            2019-2021
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] mt-[34px] w-[23%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_600 w-[auto]">
                        Skills
                      </Text>
                      <Text className="font-medium lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] ml-[27px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                        Angular
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border-black_900 border-bw02 border-solid lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] mt-[19px] lg:p-[16px] xl:p-[18px] 2xl:p-[20px] p-[25px] w-[100%]">
                  <Text className="font-medium lg:mb-[257px] xl:mb-[295px] 2xl:mb-[331px] mb-[398px] ml-[4px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
                    Assessment
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 border-black_900 border-bw02 border-solid items-center 2xl:p-[10px] p-[12px] lg:p-[7px] xl:p-[8px] w-[37%]">
                <Row className="items-center justify-between w-[94%]">
                  <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                    Jobs
                  </Text>
                  <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900_7f w-[auto]">
                    Appointments
                  </Text>
                  <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900_7f w-[auto]">
                    Notes
                  </Text>
                </Row>
                <Line className="bg-black_900 h-[2px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] mt-[24px] w-[27%]" />
                <Row className="border-black_900 border-bw05 border-solid items-center justify-center mb-[1048px] lg:mb-[679px] xl:mb-[776px] 2xl:mb-[873px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] mt-[32px] 2xl:p-[10px] p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius24 w-[49%]">
                  <Img
                    src="images/img_plus_blue_700.png"
                    className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] ml-[29px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                    alt="plus One"
                  />
                  <Text className="font-normal lg:mx-[12px] xl:mx-[14px] 2xl:mx-[15px] mx-[19px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    Add appointment
                  </Text>
                </Row>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default CandidateViewPage;
