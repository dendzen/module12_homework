function Device(name, voltage){
  this.name = name,
  this.voltage = 220
}

Device.prototype.getOn = function(name){
  console.log(this.name +' device ON')
}
Device.prototype.getOff = function(name){
  console.log(this.name + ' device OFF')
}

function LightElectronic(name, color){
  this.name = name,
  this.color = color,
  this.flashMode = function(){
    console.log('Flash mode enable')
  }  
}

LightElectronic.prototype = new Device()

function SoundElectronic(name, power){
  this.name = name,
  this.power = power,
  this.volumeUp = function(){
    console.log(`Max Volume enable: ${power} dB`)
  }   
}

SoundElectronic.prototype = new Device()

const device_1 = new LightElectronic('Lamp', 'White');
const device_2 = new SoundElectronic('BoomBox', '60');

device_1.getOn()
device_1.flashMode()

device_2.getOn()
device_2.volumeUp()