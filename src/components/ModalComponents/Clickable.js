import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Arrow } from '../CommonComponents';
import ClickableDetail from './ClickableDetail';
import CardSection from './CardSection';
import Total from './Total';

const Clickable = ({ data }) => {
  const {
    ship,
    pay,
    total
  } = data;

  return (
<View>
 <TouchableOpacity style={{ paddingTop: 15 }}>
    <CardSection>
      <ClickableDetail
      header='Ship to'
      main={ship.name}
      sub={ship.address}
      />
      <Arrow />
    </CardSection>
  </TouchableOpacity>
  <TouchableOpacity>
     <CardSection>
     <ClickableDetail
     header='Pay with'
     main={pay[0].type + ' ' + pay[0].number}
     sub={pay[1].type + ' ' + pay[1].number + ' (backup)'}
     subColor='#B3B6B8'
     />
       <Arrow />
     </CardSection>
   </TouchableOpacity>
   <TouchableOpacity>
      <Total value={total.value} currency={total.currency} />
    </TouchableOpacity>
  </View>
  );
};

export default Clickable;
