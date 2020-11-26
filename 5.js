
class Device{
  static reset(){
		console.log('RESET DEVICE')
       }    
  getOn(){
	    console.log('On');
       }   
  getOff(){
	    console.log('OFF');
       }
}

class LightElectronic extends Device{
  flashMode (){
    console.log('Flash mode enable')
  }
}

class SoundElectronic extends Device{
  volumeUp (){
    console.log(`Max Volume enable`)
  }
}

const device_1 = new LightElectronic(name);
const device_2 = new SoundElectronic();


device_1.getOn()
device_1.flashMode()

device_2.getOn()
device_2.volumeUp()
