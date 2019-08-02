import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import logo from '../../assets/logo.png';
import styles from './PrivacyPolicy.module.css';

class PrivacyPolicy extends Component {
  render() {
    return (
      <div className={styles.content}>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <div className={styles.header}>
                <img src={logo} alt="" className={styles.logo} />
                <h2>プライバシーポリシー</h2>
              </div>

              <h3 className={styles.section}>1. プライバシーの考え方</h3>
              <p>
                Refrii（以下、当サイトという）では当サイトの円滑な運営に必要な範囲で、当サイトを利用される皆様（以下、ユーザーという）の情報を収集しています。
                収集した情報は利用目的の範囲内で適切に取り扱います。
              </p>

              <h3 className={styles.section}>2. 情報の収集</h3>
              <p>
                当サイトでは、以下の方法によりユーザーの情報を収集することがあります。
              </p>

              <h4 className={styles.section}>2.1 Cookie（クッキー）</h4>
              <p>
                当サイトでは、利便性の向上および統計データの取得のために、Cookie を使ってユーザーの属性や行動履歴を取得することがあります。
                Cookie には氏名やメールアドレスなど特定の個人を識別することができる情報は含まれません。
              </p>
              <p>
                Cookie による情報収集を望まれない場合は、ウェブブラウザの設定によってCookie の機能を無効化できます。
                その場合、当サイトの一部の機能を利用できなくなることがありますがご了承願います。
              </p>

              <h4 className={styles.section}>2.2 Google</h4>
              <p>
                当サイトでは、ユーザーを認証するために、Google アカウントによるログイン機能を使用しています。
                ユーザーがログインする際に、ユーザーのアカウント情報を取得します。
              </p>

              <h3 className={styles.section}>3. 情報の利用</h3>
              <p>
                当サイトでは、収集した情報を以下の目的で利用します。
              </p>
              <ul>
                <li>当サイトの運営およびサービス向上</li>
                <li>当サイトへのお問い合わせなどに対する回答</li>
                <li>個人を特定できない範囲での統計情報の作成および利用</li>
                <li>ユーザーの行動履歴に基づく広告の配信</li>
                <li>当サイトの提携先への、個人を特定できずユーザーの許諾を得た範囲内での情報の提供</li>
                <li>法律の適用を受ける場合を除き、ユーザーの同意を得ることなくユーザーの情報を第三者に開示することはありません。</li>
              </ul>

              <h3 className={styles.section}>4. 当サイトが利用・提携しているサービス</h3>
              <p>
                当サイトでは以下のサービスを利用・提携しています。
                これらのサービスでは、当サイトが限定する範囲で、ユーザーのCookie 情報を収集することがあります。
                これらのサービスで収集される情報については、各サービスのプライバシーポリシーをご確認ください。
              </p>
              <p>
                上述の通り、Cookie による情報の収集はユーザーによって無効化することができます。
              </p>
              <ul>
                <li>
                  <span>Google Analytics</span>
                  <br />
                  <a href="https://policies.google.com/technologies/partner-sites?hl=ja" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/partner-sites?hl=ja</a>
                </li>
                <li>
                  <span>Firebase</span>
                  <br />
                  <a href="https://firebase.google.com/support/privacy/?hl=ja" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy/?hl=ja</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PrivacyPolicy;
