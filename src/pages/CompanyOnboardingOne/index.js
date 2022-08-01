import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Input, SelectBox, Button } from "components";

const CompanyOnboardingOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/dashboard");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins mx-[auto] lg:pb-[213px] xl:pb-[243px] 2xl:pb-[274px] pb-[329px] w-[100%]">
        <Column className="items-center w-[100%]">
          <Row className="bg-white_A700 border border-black_900 border-solid xl:p-[10px] 2xl:p-[11px] p-[14px] lg:p-[9px] w-[100%]">
            <Img
              src="images/img_flag.png"
              className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] h-[36px] 3xl:h-[37px] xl:mb-[5px] lg:mb-[5px] 2xl:mb-[6px] mb-[8px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[41px] ml-[50px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] mt-[25px] w-[2%]"
              alt="flag"
            />
            <Img
              src="images/img_yreman.png"
              className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] h-[30px] 3xl:h-[31px] xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] ml-[5px] lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] mt-[39px] w-[9%]"
              alt="yreman"
            />
          </Row>
        </Column>
        <Row className="items-center 2xl:ml-[100px] ml-[120px] lg:ml-[77px] xl:ml-[88px] lg:mr-[129px] xl:mr-[148px] 2xl:mr-[166px] mr-[200px] lg:mt-[36px] xl:mt-[42px] 2xl:mt-[47px] mt-[57px] w-[81%]">
          <Img
            src="images/Asset-3hyreman.svg"
            className="lg:h-[426px] xl:h-[488px] 2xl:h-[548px] h-[657px] 3xl:h-[658px] w-[34%]"
            alt="LayerOne"
          />
          <Column className="items-center lg:ml-[228px] xl:ml-[261px] 2xl:ml-[294px] ml-[353px] w-[40%]">
            <Row className="items-center justify-center w-[21%]">
              <div className="bg-blue_800 xl:h-[3px] lg:h-[3px] h-[4px] 3xl:h-[5px] rounded-radius2 w-[41%]"></div>
              <div className="bg-blue_800 xl:h-[3px] lg:h-[3px] h-[4px] 3xl:h-[5px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] rounded-radius2 w-[41%]"></div>
            </Row>
            <Column className="bg-bluegray_101 lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] mt-[32px] lg:p-[53px] xl:p-[60px] 2xl:p-[68px] p-[82px] shadow-bs w-[100%]">
              <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] ml-[19px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] text-[24px] text-blue_800 w-[auto]">
                Welcome to Hyreman
              </Text>
              <Text className="font-normal leading-[normal] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] ml-[19px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-bluegray_900 text-center w-[91%]">
                Set up your company account and finish with creating an account
              </Text>
              <Text className="font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] ml-[44px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] mt-[30px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Company name
              </Text>
              <Input
                className="bg-transparent border-0 font-medium p-[0] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] placeholder:text-black_900_3f text-black_900_3f w-[100%]"
                wrapClassName="2xl:ml-[36px] 2xl:mt-[4px] lg:ml-[28px] lg:mt-[3px] ml-[44px] mt-[5px] w-[80%] xl:ml-[32px] xl:mt-[3px]"
                name="Frame143"
                placeholder="Enter first name"
                variant="FillWhiteA700"
              ></Input>
              <Text className="font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] ml-[44px] xl:mt-[11px] 2xl:mt-[12px] mt-[15px] lg:mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Country
              </Text>
              <SelectBox
                className="bg-transparent font-medium lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] ml-[44px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900_3f w-[80%]"
                placeholderClassName="bg-transparent text-black_900_3f"
                name="Frame143 One"
                placeholder="Select country"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_black_900.png"
                    className="w-[10.5px] h-[4.73px] mr-[16px] lg:w-[6px] lg:h-[4px] lg:mr-[10px] xl:w-[7px] xl:h-[4px] xl:mr-[11px] 2xl:w-[8px] 2xl:h-[4px] 2xl:mr-[13px] 3xl:w-[10px] 3xl:h-[5px]"
                    alt="arrow_down"
                  />
                }
                shape="oundedBorder10"
                size="sm"
                variant="illWhiteA700"
              ></SelectBox>
              <Text className="font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] ml-[44px] xl:mt-[11px] 2xl:mt-[12px] mt-[15px] lg:mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Number of employees
              </Text>
              <SelectBox
                className="bg-transparent font-medium lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] ml-[44px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900_3f w-[80%]"
                placeholderClassName="bg-transparent text-black_900_3f"
                name="Frame143 Two"
                placeholder="Enter number of employees"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_black_900.png"
                    className="w-[10.5px] h-[4.73px] mr-[16px] lg:w-[6px] lg:h-[4px] lg:mr-[10px] xl:w-[7px] xl:h-[4px] xl:mr-[11px] 2xl:w-[8px] 2xl:h-[4px] 2xl:mr-[13px] 3xl:w-[10px] 3xl:h-[5px]"
                    alt="arrow_down"
                  />
                }
                shape="oundedBorder10"
                size="sm"
                variant="illWhiteA700"
              ></SelectBox>
              <Button
                className="common-pointer font-normal mb-[1px] ml-[101px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] mt-[38px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-center w-[52%]"
                onClick={handleNavigate2}
                shape="RoundedBorder10"
                size="sm"
                variant="FillBlue800"
              >
                Set up account
              </Button>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default CompanyOnboardingOnePage;
