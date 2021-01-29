import React from 'react';
import {  StyleSheet,View, Image, FlatList } from 'react-native';

import {BottomNav} from "../../components/BottomNav"
import { Txt } from '../../components/Txt';
import sun from "../../assets/images/sun.png"
import { Company } from '../../components/Company';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Azərbaycan beynəlxalq bankı',
    logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUQEhIVFREWFxcYGBUXGRcVFRgVFxUYFxUWGRoYHSggGBolHRUVITEhJSkrLi4uGCAzODMsNygtLysBCgoKDg0OGhAQGy0mHyUvLSstNy0rLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALkBEAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBBQIECAP/xABGEAABAwICBgcFBgMHAgcAAAABAAIDBBEFBgcSITFBURMiUmFxgZEyQqGxwRQjYnKC0ZKywjM0Q1NzotJUkxUkJTVE4fD/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFAQIG/8QAKxEAAgICAQQBAgUFAAAAAAAAAAECAwQREhMhMUFRImEUMnGBkQUVI1Kh/9oADAMBAAIRAxEAPwC8UREAREQBERAEREAREQBERAERYKAyurXVscDDLI4MY0XLju/+1xxPEI6eN00rg1jRcn6Dme5Ujm7NEtfJc3bC09SP+p3N3yU9GO7X9iOyxQRss357lq7xQ3jp+PB7x38h3eq1eV81VFA7qHWiPtRHd4t7JWhWVsqitQ4a7FF2Sb2eg8v49BWxiSJ1+00+008iFtl50wXFpqSUTQus4bx7rhxaRxHyV45YzDFXxdIzY4bHsO9rvqORWTk4zqe14LlVvPz5N0iwFlVSYIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIDF0utHnTFX0lJLPHYSDVDbi4u5wbu8yqiqc6YjJvqXgcmBrfkFZoxp2ra8EVlqg9Mvm6XXnaXG6t3tVEx/W7918m4pUDdPL/wBx/wC6sf26X+yI/wASvg9HXXCSQNBcTYDaSdwHEqrtGLqyomdK+eUwRb2lxLXPINgb77Db6LY6VMxGNgooz15BeQjhHwb+r5DvVZ476vTT2SdX6OREs95odXS6jCRTsNmjtEXBefp3eKiyypvo5yp9pf8AaZh9ww9Vp994/pHzWs3Civ7IprlZI7uQ8jdJq1VU3qbCyI+8O08HhyC3meMkMqWmenaG1AG1o2NktwNtzrDYVNmhZKyJZNkp89lzpR46PNUkTmuLC0hwNi222/K3NS/JOEYnHM2eGItZsDukPRtcziCDtPdsVo1dLRwPdVSMiY875XAA7O8qNYtpLpI7iFrpnc/YZ6kXPkFceTO2PGMCFVRg9tk5YVyuqar9JVdJ/ZiOIdw1j6u/ZaSozXiEntVUvkdUejbKGOBY/Oke3kRR6Aul15ydi1Sd88v/AHH/ALrMeL1Td1RKP1u/dSf2+Xyc/Er4PRl0BVBU+bcQj9mqk/VZ/wDMCrJ0bZinrWSidwc+NzbEADquB327wVBdiTrjyfg9wuUnomqLAWVVJgiIgCIiAIiIAiIgCIiAIiIAiIgINpcmtSNb2pW+gBP7Kn1aumR33MA5yO/kVUrawV/iRQvf1m4wzLFbUsEsMBdGbgOuwAkGx3m67ZyLiX/TH+Nn/JWbo2bbD4f1n/eVKbKrZnTjJpJdiaNEWtkdy3QMw6hAk2FrTJKfxWu703eSpTF8RfUzPnf7T3X8BuaPIWCtbSviPRUghBs6ZwH6G2c76DzVPKbBhvdj8sjvetRXo7+A4W+rnjgb7x2nstHtO8h9FdOL10OF0d2gBrGhkbO062wfUnxUY0RYRqxyVbh1nnUZ+QWLiPE7PJdDSyyqdKwmN32Vjeq4bW659outu4Dao7n1r1W32R7guFfJeTllzSW9p1Kxus0/4rBYi/No3jwWyzNpIjjvHSWkf/mG/RjwHvH0CqlYVl4VTly0RdaetHbxLE5ql/STyOe7v3DwA2BdVd/B8FqKt+pBGXHidzW/mduCsXA9GMTAHVTzI7sMOqwd195+C9WX10rRyNcplWNFzYC55DaVsqXLlbLtZTSkc9Ugf7rK6P8A06gb/gQ/whx+pXHCs20dVN0ELy59i72SGkDfYneq0s6bW4x7EioXtlTtyPiZ/wDjO83M/wCS4T5LxFjS51M7VAJJDmGwG0n2lfK+Na0GN45td8ioV/UJ78I9vHiebVYGh2W1ROztRtP8Lj/yVftU30Sf3x3+k75tV/J70sgq/Oi4gsrAWVgmgERF0BERAEREAREQBERAEREARFi6Ar/TFHenhdylPxaf2VTq6NKlPr0DncWPY7y1tU/zKl1s4L3UUcj8xdmjGS+Hx9znj0eVJairjjF3vawc3ENHxUG0QVQdTyxcWSa3k9o+oKhmkaBzK+UOJLXWe25JsHDcOQuCqX4fqXyhsn6nGtM72lDF46mojET2vjjYdrTcazjc7R4BQtZXbwmHXniZ2pGD1cFqwgq69L0VJPlLZfOW6D7PSwxdljb/AJiLu+JK2MsTXAtcAWnYQRcEciFyaLLkvnm9vZopdtFX5y0e2vPRjvdD9Y/+PotPk7I0lWRLOHR0/wDC99jtABGwbN6uYoArSzLFDjsi6MeWzq4dh8UDBHEwMYNwaLeZ5nvXZcFyshVXfsl0ed8w0xiqpo3EktkcLkkm17jae4hffKWICnrIZXHVaHWcdw1XAtN/W/ktnpNgDMQkI95rHeerb6KKLfglOpL5RnS+mZ6No8Tgm2xSxv8Ayua75FfeoaXNc0bCQQD3kWC82xvLTdpIPMGx9RtUjwjPNfTWHS9IzsydbZ3O3j1VCf8AT5LvFliOSvDR8cbyfW0m18evGPfju5vidlx5rdaImXq3nlEfi4BSvAdIVLUWZN9zIdlnbWHwdw81IaHBqaKV1RFG1r5AA4t2AgG4Nhsv3pbkzUHCxdzsK48uUWbQLKwFlZ5ZCIiAIiIAiIgCIiAIiIAiLBQGV1q2sjhY6SRwaxouXHYF8cWxOKmjdNK4NY31J4ADiSqSzVmeavku7qwg9SPgBzdzcrGPjytf2IrLVBFw14ZX0T9Q3ZNEdU7uF27OG0KgSLbDvVuaJsT6SmdTk9aF2z8jySPjrKB58wo01ZI0CzH/AHjfB28eTrq5h/47JVsgu+qKkbHRXiXQ1nRk9WZpb+sdZv8AUPNS7P8AlGWufFJDqhwBa/WNhq3uD322qpKWd0T2yNNnMcHA94II+S9B4DibKqCOdm57QSOTveafA3XMvlVYrYnadTi4sgVHop/zanyYz6uO30W7wvRzSQSMl15XPY4OFyALg3FwApmFlUpZNsvMidVQXo4hckRQkgREQBYWUQEZzHkumrpOlkdI14aG3aQBYEkbCO9Ruq0UsP8AZ1LgfxMDh8CFZSxZTQyLILSZ4dcX5RSuJ6Oq+EEsa2YfgNnfwu/dRSogfG4se1zHDe1wIPoV6SlkDQXE2AFyeAA2krSPGH4pH/hzN5i2u0/zNKtV501+ZbRBPHXplCqR5XzlU0JDb9JBxjcd35T7p+C2+adHcsF5aUmWPeY/8Ro7u38/FQUiyvp13x+UQalWz0JgOOwVsfSwuuPeadjmnk4LaLzpg+KzUkgmhdquG8e64dlw4hXblTMsVfFrt6sjfbjJ2tPMc296ysnGdT2vBbqtUuz8m/RYWVVJgiIgCIiAIiIAiIgML41VQ2NjpHuDWNBJJ3ADevsVXOl2rqGsjjaCKdx6zhxeNzDyHHvUlVfUkonmcuK2Q3OWZn1817kQNP3bP63DtH4BR9YUt0bUVLNVWnI1mi8bD7LncfMb7fstyXGmvsuyM9bnIk+jLLE8BNXKSzXbZsXEtJvrPBGzuHetjpNwI1NN0zBeWG7rDeWe+O/n5KZNR4WK75Ozqey901x4nmhTXRtmb7LL9nldaGU7CdzJNw8AePfZaLN1NBFVzMgN4w7ya4+00cwCtQtqUVdXp+yim4SPS7SuSiGjatqZaQGcdUG0byes9g5+G6/FS4LBnHjJxNGL2tmURF5OhERAEREAWCVla3MM88dPI+nYHzBpLWnn9SN9uK6lt6DIZpQzMGMNFEeu8feEe6w+7fmfl4qsaKslheJInuY8e802PgeY7iuFRM57nPeS57iS4neTxukIaXNDjqtJGsRts2+0242F1u1Uxqr15+TOnNylsuzIONz1tOZJmAFp1Q8bA+w2m3DkujnbI7KoGaABlQBtG5snceTu/wBVKcHp4o4Y2Q26INGrbiLbD333rulY3VcLHKHYvcNx0zzXNE5jixzS17TYtOwgjgQu1guKy0kzZ4jZzd44Obxae4/sp/paoaUBk1w2pJtqj32DeXcrc1Wa2qrFdXtooyjwl2PQuXsajrYWzxnYfabxa7i0raKmNF1XUNq+jjF4ngmQbg0Dc/x4d91cwWPkVdOfFF2qfKOzKIigJAiIgCIiAIiIDBXRxfDY6qJ8Eguxwt3g8CO8LvrBRNrujjWzzzmLBZaKZ0Mg72u4PZfY4fVa6J5aQ5pIcDcEbCDzCv3NGX4q6Ixv2OG1j+LXc/DmFR+NYRNSSmGZtnDcfdcO008ltY2SrY6fko21OD2vBaORs7tqgKechtQNztzZPDgHd3FSfMP2j7PIKYAzlpDbm208fGy88g+qsDKmkV8Voqu72bhKNrwPxD3h37/FV8jD4vnD+CWu7a1IgdVA+N5ZI1zXg9YO2Ov3qQZGy2a6frA9BHYyHnyYPH5K1a3D6DFIg46kreEjDZzfMbR4FdrLuBxUUXQxXIuSXH2iTxPwHkk87cNa1I5Gj6vsbGCJrWhrQA0CwA3ADcF9VgLKzS2EREAREQBERAFxIXJYQFUaTsrCI/bYW2Y4/etHuuO5/gePfZV6vSVdSsmjdE8XY8Frh3EWXn3HcMdSzyU7vccbHm33T5iy18G9yXCXlFK+GntFiaJ8eL2Oo3nrMGtH+Ti3yJ9CpPmzMkeHxdI4Fz3XDG9pw33PAC6pPA8SdSzxzt9x1z3t3OHorizzh7ayheWbS1olYfDb8W3VfIpjG5N+GSVTbg17RTOK4jLUyumldrPd6AcABwAXypKZ8r2xxtLnuIa0DiSsU1O+VzY42lz3GzWjaSSrlyNk9tE3pZLOqXDaeDAfdb9Sr110aYaX7EFcHNnfyblxlBDqb5XWMjubuQ/CNykARZWJKTk9vyX0klpBEReToREQBERAEREAREQGLLV4/gUFbH0Uzb9lw2OaebStqsWRNp7RxrfYofNGUqihcS4a8PCVoNv1D3T8FH16Rq3xgashbZx1bOtY34bd/FQfMOjaCW76Z3Qv7G+Mnw3tWpTnerP5KtmP/qVfh2IzU7teGRzHfhOw+I3HzU1wnShUM2TxNkHab1HefA/BRfGMt1dIfvYnavbb1meo3ea1KtyqquW9JkKlKBctHpKoH+10kZ/E249Wkrb0WbqCZzWMqGF7iAGm4JJ3AX4qg7LuYHLqVML+zKw/7gq08CGm0ySORLweiwVyXELkskuhFi6AoDKIsIDV4pmGkpXak0zGOtfVJ2252HgtLV6RcOZuke88mMP1sFAtKM2tXuHZYwfC/wBVEVp04MJRUm33Kk72m0i5MB0gRVdS2nbE5jXA2c4i5cBcCw2DjxWl0wYYAYqoDf8Adu+Lmf1KAYTVmCeKYe49rvIHb8FdGf6UTYfKey0SD9O35XXJ1qi6Lj4Z2MnZBplGK7tHNd09AwO2lmtGfAHq/wC0hUkrM0NVX94h5dG8ees0/wAoU+dHde/gjx3qWiV5YylT0Os5g1pXE3e7eGk7Gt5D5qQgIFlY7k5PbLqSXgIiLh0IiIAiIgCIiAIiIAiIgCIiAgGmGS1NE3nLf0af3UOwHPdZS2a49NH2XnaB3O3jzupZpkH3NP8A6jv5FVS2MSqE6UpL5KV0nGfY9CZexVtbTsnDC0Pv1XWO42PlsXXxHKVDUXMlOzWPvNux3q2y6ejf/wBvh/X/ADlSi6y5bhNqJbX1R7lG5/y/HQztZFrdG9msLm5vezhf09VGQSNo3hXnnHKjMR6O8hjMZdtADiQ4C42+AXTw7RzQRWL2ulI7Z6v8LbBaFebFVrl3ZWlRLl2JHgtWJ6eKUbnsafMgX+K711H8RzHQUDOjL2DVFhFHtPgAN3mq6zLpCqKm8cAMMR2X3yOHefd8lTrx52PsuxNK2MV3JhnPPUdJeGC0lRuPZj73cz3LTZO0hkkQ1rt/szWttJ3PAFh4qtFlaMcKvhxf8lZ3y5bPS0bwQCDcHaCN1lklUpkTMFZFNHTRHpI3uA6N25o95wO9thc8laGccVFLSSy362rqs/O7YPTf5LNtx5VzUPkswtUo7KXzTWdPWTyjcZCB4N6o+AXzy9h4qamKA3s94Btv1RtdbyBWvU50S4f0lS+cjqxMsD+J9x8gfVbFr6dT+yKcVymTvD8j4dDtEAc4cXkv+BNvgtti8IfTyx22GJ7fVpC7oXyqz1Hn8LvkVhc5SabZf4pLsebGqdaIZLVcjecR+Dh+6grVNtEv99d/pO+bVuZPemX6FGr86LjCysBZWCaAREQBERAEREAREQBERAEREAREQED0vxXpY3dmUfFpCqJXnpDoXT0MrGNLngscGgXcdV7b2A7rqkpqSVmx8b2nk5pHzC18Ga6et+ylkRfIkmXs91FFC2Bkcb2NJILtYHrG53LaHSpU/wDTxer1ALpdTvGqk9tEatmu2yZ1Okuvd7IiZ4MJPxNlo8QzNW1GySokIPug6rfRtlqmi+4X8Nq2FFgFZMfu6eU9+qQPV1guqqmvvpI5znL5NcinOFaM6qTbO9kTeQ67/hs+KnGCZKoaSztTpJB78liQe4bmqKzNrj2Xf9D3GmUvJW+WsjVNXZ7wYYe24EOI/C07/E7FsszaOZYbyUpMsfFh/tB4cHfNW21CqDzrXLf/AAsLHjrRX+i/LRhaauVpbK8FrGkWc1nEkHcSR6KPaT8eE84pmG8cN7kbjJuPoNnmVNc/ZoFFF0cZ/wDMSCzR2W7i8/RUq4km5Nydt+Z5+Ks40HZPrT/Yitkox4IFXdkHChR0TS/qvfeR99lgdwPg23xVb5AwA1lSC4fcxWc/kT7rPP5BTrShjn2em+zsNpJrjZwjHteF93mmXPnJUr9xSuKc2aCbSnOHu1YIyy51SS4EtvsJ77WXWq9J1VI1zOhiaHAi93E7RYqDXS6srFpXojds37Cnuh+O9TM7sxAfxO2fylQaKF7vZa53gCfkrT0SYXJC2eSSN7C8xtAc0tJDQ43297l5zJpVNHaU3NFhBZWAsrEL4REQBERAEREAREQBERAEREAREQHGyw6MHeAfHauaIDpyYZA72oYz4tafouH/AIPTf5EX8Df2XfRd5P5OaR14qSNvssa3waB8l9SFzWCuNs7or/PGcquil6FkLWgi7JXEu1h3DYARyKrnE8eq6l2tLM91jcC+q0EG4IA2BXhmPA4q2EwyDva7ix1tjh+yo3HcGmo5TDKLH3Xe65t9jgtTClW1rXcp3qSe99izMh51FSG01QQKgbGu3CS3yds81us3ZqioI9vWmcDqR8+93JqokH1+q+lTUvlcXyOL3ne5xuT5r3LBi58t9jivfHXs+uIV0lRI6aVxc9xuSfgByAWMOoZKiRsMbdZ7zYD5k8gN6+dNTvle2ONpc9xAa0bySrqyPlJtCzXfZ1Q8dZ3Bo7De7v4qW++NMdLz6PFdbm/sbPLGBsooGwt2ne93FzzvP/7gtlLTtd7TQ7xAPzX1CysRybe35L6SS0dF2E052mCI/ob+yMwmnG6GIfob+y7yJyfyNI+UcLW+y0DwAC+gCyi4dCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIDBWrx/AoK2MxStv2XDY5p5grariik09o40n2ZQmZ8sVFA+zxrRE9WUDqnkD2Xdy6GEYTPVyCKFhc7ifdaObjwCurPf9xn/L9VHtEH9hL+f6LUjlz6Ll7KkqVz4m8yhlGKgbre3O4daQ8Pwt5D5qTrgFzWZKbm22W1FJaQREXDoREQBERAEREAREQBERAEREB//Z",
    services: [
      {
        title: "valyuta tənzimlənməsi",
        id: '3ac68afc-c605-48d3-a4f8-fbd913aa97f63',
        branches: [
          {
            title: "Nərimanov filialı",
            place: 13
          },
          {
            title: "Nizami filialı",
            place: 11
          },
          {
            title: "Binəqədi filialı",
            place: 14
          },
        ]
      },
      {
        title: "pul köçürme",
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        branches: [
          {
            title: "Nərimanov filialı",
            place: 13
          },
          {
            title: "Nizami filialı",
            place: 11
          },
          {
            title: "Binəqədi filialı",
            place: 14
          },
        ]
      },
      {
        title: "kassa emeliyyatları",
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa897f63',
        branches: [
          {
            title: "Nərimanov filialı",
            place: 13
          },
          {
            title: "Nizami filialı",
            place: 11
          },
          {
            title: "Binəqədi filialı",
            place: 14
          },
        ]
      },
    ]
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-f7bd91aa97f63',
    title: 'Azericard',
    logo: "data:image/png;base64,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",
    services: [
      {
        title: "valyuta",
        id: '3ac68afc-c605-48d3-a4f28-fbd91aa97f63',
        branches: [
          {
            title: "Nərimanov filialı",
            place: 13
          },
          {
            title: "Nizami filialı",
            place: 11
          },
          {
            title: "Binəqədi filialı",
            place: 14
          },
        ]
      },
      {
        title: "pul köçürme",
        id: '3ac68afc-c605-48d3-a4f81-fbd91aa97f63',
        branches: [
          {
            title: "Nərimanov filialı",
            place: 13
          },
          {
            title: "Nizami filialı",
            place: 11
          },
          {
            title: "Binəqədi filialı",
            place: 14
          },
        ]
      },
      {
        title: "kassa emeliyyatları",
        id: '3ac68afc-c605-48d3-a4f8-mfbd91aa97f63',
        branches: [
          {
            title: "Nərimanov filialı",
            place: 13
          },
          {
            title: "Nizami filialı",
            place: 11
          },
          {
            title: "Binəqədi filialı",
            place: 14
          },
        ]
      },
    ]
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557u1e29d72',
    title: 'Baku Medical Plaza',
    logo: "data:image/jpeg;base64,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",
     services: [
      {
        title: "valyuta",
        id: '3ac68afc-c605-48d3-a4f8-fbad91aa97f63',
        branches: [
          {
            title: "Nərimanov filialı",
            place: 13
          },
          {
            title: "Nizami filialı",
            place: 11
          },
          {
            title: "Binəqədi filialı",
            place: 14
          },
        ]
      },
      {
        title: "pul köçürme",
        id: '3ac68afc-c605-48d3a-a4f8-fbd91aa97f63',
        branches: [
          {
            title: "Nərimanov filialı",
            place: 13
          },
          {
            title: "Nizami filialı",
            place: 11
          },
          {
            title: "Binəqədi filialı",
            place: 14
          },
        ]
      },
      {
        title: "kassa emeliyyatları",
        id: '3ac68afc-c2605-48d3-a4f8-fbd91aa97f63',
        branches: [
          {
            title: "Nərimanov filialı",
            place: 13
          },
          {
            title: "Nizami filialı",
            place: 11
          },
          {
            title: "Binəqədi filialı",
            place: 14
          },
        ]
      },
    ]
  },
 
  

];


export const HomeScreen = ({navigation}) => {


  return (
      <View style={styles.container}>
       
        <View style={styles.header}>
          <Txt style={styles.greeting}>Good morning, {"Narmin"}</Txt>
          <Image source={sun} style={styles.img}/>
        </View>

        <FlatList
        style={styles.companies}
        data={DATA}
        renderItem={({item}) => <Company data={item}
                                         onPress={() => navigation.navigate("company",{services: item.services, title: item.title})}/>}                                
        keyExtractor={item => item.id}
        />

        <BottomNav navigation={navigation}/>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  header: {
    backgroundColor: "#21ADE3",
      height: 70,
      alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection: "row",
      paddingHorizontal: 40,
      width: "100%"
  },
  greeting: {
    fontSize: 24,
    color: "#fff"
  },
  img: {
    width: 40,
    height: 40,
  },
  companies: {
    width: "100%",
    marginVertical: 30,
    
  }
});
