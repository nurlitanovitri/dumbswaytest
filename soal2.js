function hitungVoucher(voucher,total){
	  var diskon = 0;
	  var dibayar;
	  var kembalian = 0;
      if (voucher == 'DumbWaysJos') {
      	if(total >= 50000){
           diskon = 21.1/100 * total;
           if (diskon <= 20000) {
              dibayar = total - diskon;
           } 
           if(diskon > 20000){
           	  diskon = 0;
           	  dibayar = total;
           }
      	} else{
      		dibayar = total;
      	}
      } else if(voucher == 'DumbWaysMantap') {
        if (total >= 80000) {
        	diskon = 30/100 * total;
        	if (diskon <= 40000) {
        		dibayar = total - diskon;
        	} 
        	if (diskon > 40000){
        		diskon = 0;
        		dibayar = total;
        	}
        } else {
        	dibayar = total;
        }
      } else {
      	dibayar = total;
      }
      kembalian = total - dibayar;

      return 'dibayar = Rp.' + dibayar + '\n' + 'diskon = Rp.' + diskon + '\n' + 'kembalian = Rp.' + kembalian;
	}

	console.log(hitungVoucher('DumbWaysJos', 50000));