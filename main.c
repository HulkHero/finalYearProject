#include "general.h"
#include "tm_stm32f4_adc.h"
//void gpsConfig();
//char *strstr(const char *s1, const char *s2);

int a=5;
char  awien='a';

enum state cState=idle;

float current[1000];;
float voltage[1000]; 
float dumyCurrent[10];
float dumyVoltage[10];
char carray[4];
int c1;
int c2;

void waitingToStart(){
  while((USART1->SR & 0x20) == 0);// wait till RXNE is 1
  uint8_t c =USART1 ->DR;
  if(c==0x73){   // recieved s  start
        CONSOLE("g,");
       cState=irradiance ;
  }  
  return;
}

void irradiance1000(){
  
  delay_us(1000000);
  /*
  
     enter your code here
    
    */
  CONSOLE("i,");
  cState=sensors;
}

void readingSensorData(){
   
  
  
  
  
  
  
  cState=uart;
}

void sendingSensorData(){

  float dumyVoltage[11]={0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
  float dumyCurrent[11]= {1, 1, 0.98, 0.95, 0.84, 0.6, 0.2, 0, 0, 0, 0};
      while((USART1->SR & 0x20) == 0);// wait till RXNE is 1 c recived
  uint8_t c =USART1 ->DR;
  if(c==0x63){
   for(int i=0;i<1000;i++){
    sprintf(carray, "%d", dumyCurrent[i]);
    CONSOLE(carray);
    CONSOLE(",");
   }}
    while((USART1->SR & 0x20) == 0);// wait till RXNE is 1 c recived
  uint8_t v =USART1 ->DR;
  if(v==0x76){
   for(int i=0;i<1000;i++){
    
    
    sprintf(carray, "%d", dumyVoltage[i]);
    
    CONSOLE(carray);
    CONSOLE(",");
  }
  }
  
  
  
  cState=idle;
}




int main()
{
  char arr5=rx_buff[0][1];
  
  uint32_t returnCode;
  uint8_t gps_rcv_byte;
  uint8_t state;

//============INITIALIZE-ONBOARD-LEDs==========<<
  InitLedGpios();
//===============SYSTICK===============//
  returnCode = Config_Systick_168MHz();
  if(returnCode != false)
    GPIO_SetBits(GPIOD, LED_RED);       //Systick Not Initialized RED LED
  else
    GPIO_SetBits(GPIOD, LED_GREEN);     //Systick Initialized Successflly GREEN LED
////===========INITIALIZE-IND-WDOG============//
//    vIWDGResetEn();
////===========INITIALIZE-UART3-CONSOLE============//
    ConsoleUart3Init();
////==============INITIALIZE-UART1-GPS==============//
//    GPSUart1Init();
////==============INITIALIZE-UART1-GSM==============//    
//    GSMUart4Init();
////==============INITIALIZE-TIMER-7==============//   
    TIM7_Configuration();
   // CONSOLE("HELLO,");
////==============INITIALIZE-ADC==============//      
    //Init_ADC_Int();
    TM_ADC_Init(ADC1,ADC_Channel_7);
    TM_ADC_Init(ADC3,ADC_Channel_2);
    
    
    for(int i=0;i<1000;i++){
       c1=TM_ADC_Read(ADC1,ADC_Channel_7);
  current[i]=TM_ADC_Read(ADC1,ADC_Channel_7);
    }
    
    
    
    
    
////==============INITIALIZE-BAR1==============//      
//    InitBarGraph1();
////==============INITIALIZE-BAR1==============// 
//    InitBarGraph2();
//==============INITIALIZE-Accelaro==============//     
    //InitAccelarometer();
//==============INITIALIZE-TIMER-2==============//     
   //TIM2_Configuration();
   // tm_ADC_Init();
    //GpsAlgoTest();

 
 
  //CONSOLE(arr);
   
 //uint16_t arr2[10]={1,2,3,4,5,6,7,8,9,10};
  //cPutDigits(154);
  
 // putbuff(0,&arr[0],10);
  
  //float myFloat = 3.14159;
  //char floatStr[20];
 // sprintf(floatStr, "%.2f", myFloat);
//  CONSOLE(floatStr);
 // float arr3[10]={1.1,2.2,2.3,2.5,2.6,2.7,2.8,2.9,2.10,2.11};
  
 // char arr4[20];
  
 // for(int i=0;i<1000;i++){
    
    
   // sprintf(carray, "%d", current[i]);
    
  //  CONSOLE(carray);
   // CONSOLE(",");
 // }
  
 // char c=getch();
  
  
while(1)
{
  
  switch(cState){
    case idle:
      waitingToStart();
      break;
   case irradiance:
      irradiance1000();
      break;
   case sensors:
      readingSensorData();
      break;
  case uart:
      sendingSensorData();
      break;
  }
 
}         

  return 0;
}




