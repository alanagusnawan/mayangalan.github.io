import 'package:flutter/material.dart';

import 'package:get/get.dart';

class AyatQuranView extends GetView {
  const AyatQuranView({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: [
          Text(
            'وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ',
            textAlign: TextAlign.center,
            style: TextStyle(
                fontFamily: 'Josefin',
                color: Color(0xff929EAD),
                fontSize:
                Theme.of(context).textTheme.titleLarge!.fontSize),
          ),
          Text(
            '"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."\n(QS. Ar-Rum: 21)',
            textAlign: TextAlign.center,
            style: TextStyle(
                fontFamily: 'Josefin',
                color: Color(0xff929EAD),
                fontSize:
                Theme.of(context).textTheme.titleLarge!.fontSize),
          )
        ],
      ),
    );
  }
}
