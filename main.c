#include "general.h"
#include "tm_stm32f4_adc.h"
//void gpsConfig();
//char *strstr(const char *s1, const char *s2);

int a=5;
char  awien='a';

int c1;
int c2;
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
////==============INITIALIZE-ADC==============//      
    //Init_ADC_Int();
    TM_ADC_Init(ADC1,ADC_Channel_1);
    TM_ADC_Init(ADC1,ADC_Channel_2);
    
    
    
    
    
    
    
    
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
float32_t sine1 = 0;
char arr[10]={'1','2',' 3','4' ,'5' ,'6' ,'7','8','9','10' };
 
 
  //CONSOLE(arr);
  
 uint16_t arr2[10]={1,2,3,4,5,6,7,8,9,10};
  //cPutDigits(154);
  
 // putbuff(0,&arr[0],10);
  
  float myFloat = 3.14159;
  char floatStr[20];
  sprintf(floatStr, "%.2f", myFloat);
//  CONSOLE(floatStr);
  float arr3[10]={1.1,2.2,2.3,2.5,2.6,2.7,2.8,2.9,2.10,2.11};
  
 // char arr4[20];
  
  for(int i=0;i<10;i++){
    char floatst[10];
    
    sprintf(floatst, "%.2f", arr3[i]);
   
   // CONSOLE(floatst);
   // CONSOLE(",");
  }
  
//  putbuff(0,&arr4[0],10);
  
   NVIC_EnableIRQ(USART3_IRQn);
    CONSOLE("HELLOo,");
    bool check=true;
while(1)
{
  
  c1=TM_ADC_Read(ADC1,ADC_Channel_1);
  c2=TM_ADC_Read(ADC1,ADC_Channel_2);
  
  
  
  
  
  //getbuff(0,&awien,1);
    //awien=CheckRx();
    //if((USART3->DR==0x00000068) & (check==true)){
      // a++;
       //CONSOLE(",");
      // CONSOLE("a,B,");
      //  check=false;
     //  USART3->DR=0;
    
    //}

  

//state machine
  //Delayus(1000);
 //CONSOLE("h");
 
 
}         

  return 0;
}



