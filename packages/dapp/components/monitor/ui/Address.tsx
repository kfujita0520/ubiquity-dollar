const Address = (props: { address: string; title: string }): JSX.Element => (
  <a target="_blank" title={props.title} href={`https://etherscan.io/address/${props.address}`}>
    {props.address}
  </a>
);

export default Address;
